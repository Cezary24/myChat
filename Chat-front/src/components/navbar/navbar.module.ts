import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ChatModule } from '../chat/chat.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TestComponent } from '../test/test.component';
const materials = [
  MatCardModule,
  MatInputModule,
  MatSidenavModule,
  ReactiveFormsModule,
  FormsModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChatModule,
    AppRoutingModule,
    materials,
  ],
  declarations: [NavbarComponent, TestComponent],
  exports: [NavbarComponent],
})
export class NavBarModule {}
