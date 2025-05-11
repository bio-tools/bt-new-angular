import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Domain } from '@bt/core/domain/domain.model';
import { NewDomainService } from '../new-domain.service';

@Component({
  selector: 'bt-new-domain',
  templateUrl: './new-domain.component.html',
  styleUrls: ['./new-domain.component.scss']
})
export class NewDomainComponent implements OnInit {
  domain: Domain;
  error: any = null;

  constructor(private newDomainService: NewDomainService, private router: Router) { 
    this.domain = {
      domain: ''
    };
  }

  ngOnInit(): void {}

  convertJsonStringToObject(domainString: string){
    return JSON.parse(domainString);
  }

  updateToolObject(data: string){
    this.domain = this.convertJsonStringToObject(data);
  }

  // [Note]: Remove this as well as the call from HTML
  putRandomTitle(){
    let r = (Math.random() + 1).toString(36).substring(7);
    
    
    this.domain = {...this.domain, title: r};

  }

  onSave(){
    this.newDomainService.createDomain(this.domain).subscribe({
      next: (d: Domain) => {
        this.error = null;
        this.router.navigate(['edit-domain',d.domain]);
      },
      error: (e: HttpErrorResponse) => {
        this.error = e.error;
      }
    });
  }
}
