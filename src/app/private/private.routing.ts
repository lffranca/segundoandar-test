import { PrivateComponent } from './private.component';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

const ROUTE: Route[] = [{
    path: "", 
    component: PrivateComponent
}];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTE)
    ],
    exports: [RouterModule],
    providers: []
})
export class PrivateRoutingModule { 
    
}