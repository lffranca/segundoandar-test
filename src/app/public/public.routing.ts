import { PublicComponent } from './public.component';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

const ROUTE: Route[] = [{
    path: "", 
    component: PublicComponent, 
    children: [{
        path: "", 
        loadChildren: "app/public/site/site.module#SiteModule", 
        // canActivate: [AdminGuard]
    }, {
        path: "login", 
        loadChildren: "app/public/login/login.module#LoginModule", 
        // canActivate: [AdminGuard]
    }]
}];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTE)
    ],
    exports: [RouterModule],
    providers: []
})
export class PublicRoutingModule { 
    
}