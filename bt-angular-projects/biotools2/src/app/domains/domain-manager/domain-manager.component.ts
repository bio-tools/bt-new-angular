import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomainSummary } from '@bt/core/domain/domain.model';
import { DomainManagerService } from './domain-manager.service';

@Component({
  selector: 'bt-domain-manager',
  templateUrl: './domain-manager.component.html',
  styleUrls: ['./domain-manager.component.scss'],
  providers: [DomainManagerService]
})
export class DomainManagerComponent implements OnInit {
  domainsSummary: DomainSummary[] | null = null;
  constructor(private domainManagerService: DomainManagerService) { }

  ngOnInit(): void {
    this.domainManagerService.getDomainsSummary().subscribe({
      next: (domainsSummary: DomainSummary[]) => {
        this.domainsSummary = domainsSummary;
      },
      error: (e: HttpErrorResponse) => {
        console.log('Error in retrieving domains summary:', e);
      }
    })
  }


  deleteDomain(domain: string){

    if (!confirm(`Are you sure you want to delete the domain: ${domain}`)){
      return;
    }

    this.domainManagerService.deleteDomain(domain).subscribe({
      next: (_) => {
        if (this.domainsSummary){
          const domains: DomainSummary[] = this.domainsSummary.filter(d => d.name.toLowerCase() !== domain.toLowerCase());
          this.domainsSummary = [...domains];
        }        
      },
      error: (e: HttpErrorResponse) => {
        console.log(e.error);
      }
    });;
  }

}
