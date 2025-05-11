import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ToolsComponent } from './tools/tools.component';
import { StatsComponent } from './stats/stats.component';
import { BrowseComponent } from './browse/browse.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 't', component: ToolsComponent },
    { path: 'tool', component: ToolsComponent },
    { path: 'stats', component: StatsComponent },
    { path: 'browse', component: BrowseComponent },
    { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
