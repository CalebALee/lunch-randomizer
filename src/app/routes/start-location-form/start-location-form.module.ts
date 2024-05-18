import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { StartLocationFormRoutingModule } from './start-location-form-routing.module';
import { StartLocationFormComponent } from '../../views/start-location-form/start-location-form.component';


@NgModule({
  declarations: [
    StartLocationFormComponent
  ],
  imports: [
    CommonModule,
    StartLocationFormRoutingModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class StartLocationFormModule { }