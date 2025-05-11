import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToolsService } from './tools.service';
import { UsedTermsService } from '../core/http/used-terms.service';
import { Tools } from './tools.model';

@Component({
    selector: 'app-bt-tools',
    templateUrl: './tools.component.html',
    styleUrls: ['./tools.component.scss'],
    providers: [ToolsService, UsedTermsService]
})
export class ToolsComponent implements OnInit {

    constructor(private toolsService: ToolsService, private route: ActivatedRoute) { }

    tools: Tools;

    ngOnInit() {
        this.toolsService.getTools(this.route.snapshot.queryParams).subscribe(
            (tools: Tools) => {
                // resources list
                this.tools = tools;

                // we also need to handle the pagination based on pages, next, previous and count
            }
        );

        this.route.queryParams.subscribe(
            (queryParams) => {
                this.toolsService.getTools(queryParams).subscribe(
                    (tools: Tools) => {
                        this.tools = tools;
                    }
                );
            }
        );

    }

}
