import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuardService } from '@bt-core/auth/auth-guard.service';

const routes: Routes = [
    { 
        path: '', 
        pathMatch: 'full',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'about', 
        component: AboutComponent 
    },
    { 
        path: 'community', 
        loadChildren: () => import('./communities/communities.module').then(m => m.CommunitiesModule)
    },
    { 
        path: 'communities', 
        loadChildren: () => import('./communities/communities.module').then(m => m.CommunitiesModule)
    },
    { 
        path: 'stats', 
        loadChildren: () => import('./stats/stats.module').then(m => m.StatsModule)
    },
    { 
        path: 't', 
        loadChildren: () => import('./search-results/search-results.module').then(m => m.SearchResultsModule)
    },
    { 
        path: 'tool', 
        loadChildren: () => import('./search-results/search-results.module').then(m => m.SearchResultsModule)
    },
    { 
        path: 'results', 
        loadChildren: () => import('./search-results/search-results.module').then(m => m.SearchResultsModule)
    },
    { 
        path: 'login', 
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },
    { 
        path: 'signup', 
        loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)
    },
    { 
        path: 'reset-password', 
        loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordModule)
    },
    { 
        path: 'password-reset', 
        redirectTo: 'reset-password'
    },
    { 
        path: 'user', 
        canActivate: [AuthGuardService],
        canLoad: [AuthGuardService],
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
    },
    { 
        path: 'profile', 
        redirectTo: '/user/profile'
    },
    { 
        path: 'requests', 
        redirectTo: '/user/requests'
    },
    {
        path: 'edit-tool',
        canActivate: [AuthGuardService],
        canLoad: [AuthGuardService],
        loadChildren: () => import('./tool-edit/tool-edit.module').then(m => m.ToolEditModule)
    },
    {
        path: 'register',
        redirectTo: 'edit-tool'
    },
    {
        path: 'domains',
        loadChildren: () => import('./domains/domains.module').then(m => m.DomainsModule)
    },
    {
        path: 'domain-manager',
        redirectTo: 'domains/manage'
    },
    {
        path: 'edit-domain',
        canActivate: [AuthGuardService],
        canLoad: [AuthGuardService],
        loadChildren: () => import('./domain-edit/domain-edit.module').then(m => m.DomainEditModule)
    },
    {
        path: ':biotoolsID/edit',
        redirectTo: 'edit-tool/:biotoolsID'
    },
    { 
        path: ':biotoolsID', 
        loadChildren: () => import('./tool-card/tool-card.module').then(m => m.ToolCardModule)
    },
    
    // { path: '**', component:  }

  //
  // { path: 't', component: ToolsComponent },
  // { path: 'tool', component: ToolsComponent },
  // { path: 'stats', component: StatsComponent },
  // { path: 'browse', component: BrowseComponent },
  // { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
