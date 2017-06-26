import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

const APP_ROUTE: Route[] = [{
    path: 'private', loadChildren: 'app/private/private.module#PrivateModule',
}, {
    path: "", loadChildren: 'app/public/public.module#PublicModule',
}];

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTE)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { 
    
}