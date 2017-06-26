import { SiteComponent } from './site.component';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

const ROUTE: Route[] = [{
    path: "", component: SiteComponent
}];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTE)
    ],
    exports: [RouterModule]
})
export class SiteRoutingModule { 
    
}