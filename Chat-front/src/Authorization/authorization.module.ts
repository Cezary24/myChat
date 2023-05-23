import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

const materials = [  
    FormsModule,
  ReactiveFormsModule,
  MatButtonModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule];


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    materials
  ],
  declarations: [RegisterComponent,LoginComponent],
  exports:[RegisterComponent,LoginComponent]
})
export class AuthorizationModule { }