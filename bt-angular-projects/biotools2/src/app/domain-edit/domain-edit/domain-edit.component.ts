import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DomainData, Domain } from '@bt/core/domain/domain.model';
import { RemoveEmptyService } from '@bt/core/utils/remove-empty.service';
import { DomainEditService } from '../domain-edit.service';

@Component({
  selector: 'bt-domain-edit',
  templateUrl: './domain-edit.component.html',
  styleUrls: ['./domain-edit.component.scss']
})
export class DomainEditComponent implements OnInit {

  public domainID: string | null;
  private idValue = 'domain';
  domain: Domain | null = null;
  error: any = null;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private domainEditService: DomainEditService, 
    private removeEmptyService: RemoveEmptyService, 
  ) {
    this.domainID = this.route.snapshot.paramMap.get(this.idValue);
  }
  // [Note]: Need to use a searchbox to search for tools to add to the domain , like old bio.toools
  //  Should we do this when creating a new domain?

  ngOnInit() {
    this.domainID = this.route.snapshot.paramMap.get(this.idValue);

    // [Note]: Need to check if users can be here, need to return domain owner from API to check against the authenticated user

    // no need to unsubscribe as in the case of ActivatedRoute Angular does it for us
    this.route.params.subscribe(
      (param: Params) => {
        this.domainID = param[this.idValue];
        if (!this.domainID){
          return;
        }
        this.domainEditService.getDomain(this.domainID).subscribe({
          next: (domain: DomainData) =>{
            this.domain = domain.data;
            this.domain = this.removeEmptyService.removeEmpty(this.domain);
          },
          error: (e: HttpErrorResponse) => {
            alert('Domain not found');
            this.router.navigate(['/','domains','manage']);
            console.log('error in getting domain:', e);
          }
        });
      }

    );
  }

  convertJsonStringToObject(domainString: string){
    return JSON.parse(domainString);
  }

  updateToolObject(data: string){
    this.domain = this.convertJsonStringToObject(data);
  }

  // [Note]: Remove this as well as the call from HTML
  putRandomTitle(){
    let r = (Math.random() + 1).toString(36).substring(7);
    
    if (this.domain){
      this.domain = {...this.domain, title: r};
    }
    
  }

  onSave(){
    if (!this.domainID){
      this.error = {Missing: 'Domain object'};
      return;
    }
    this.domainEditService.updateDomain(this.domainID,this.domain).subscribe({
      next: (d: Domain) => {
        if (!d){
          this.error = {Missing: 'Could not retrieve tool after update'};
          return;
        }
        this.error = null;
        this.domain = d;
        this.domain = this.removeEmptyService.removeEmpty(this.domain);
      },
      error: (e: HttpErrorResponse) => {
        this.error = e.error;
      }
    });
  }

  onDelete(){
    // [Note]: If we delete a domain that has already been deleted (404 not found) then we need to show a pop-up and redirect
    if (!confirm(`Are you sure you want to delete the domain: ${this.domainID}`)){
      return;
    }
    if (!this.domainID){
      this.error = {'Missing': 'Domain not found'};
      return;
    }
    this.domainEditService.deleteDomain(this.domainID).subscribe({
      next: (_) => {
        this.error = null;
      },
      error: (e: HttpErrorResponse) => {
        this.error = e.error;
        if (e.status === 404){
          alert('Domain is not found, probably already deleted!')
        }
      } 
    });
    this.router.navigate(['/','domains','manage']);
  }

  goToDomainPage(){
    this.router.navigate(['/', 't'], {queryParams: {domain: this.domainID}});
  }
}
