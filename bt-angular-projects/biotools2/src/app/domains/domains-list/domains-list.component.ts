import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomainListData } from '@bt/core/domain/domain.model';
import { DomainsListService } from './domains-list.service';

@Component({
  selector: 'bt-domains-list',
  templateUrl: './domains-list.component.html',
  styleUrls: ['./domains-list.component.scss'],
  providers: [DomainsListService]
})
export class DomainsListComponent implements OnInit {
  domains: DomainListData | null = null;
  constructor(private domainsListService: DomainsListService) { }

  ngOnInit(): void {
    this.domainsListService.getAllDomains().subscribe({
      next: (domains: DomainListData) => {
        this.domains = domains
      },
      error: (e: HttpErrorResponse) => {
        console.log('Error in domains:', e);
      }
      
    })
  }

}
