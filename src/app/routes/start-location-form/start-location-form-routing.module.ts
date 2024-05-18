import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StartLocationFormComponent } from "../../views/start-location-form/start-location-form.component";

const routes: Routes = [
    {
        path: '',
        component: StartLocationFormComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StartLocationFormRoutingModule { }