import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ChatModule } from '../chat/chat.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

const materials = [MatCardModule, MatInputModule, MatSidenavModule];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChatModule,
    AppRoutingModule,
    materials,
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
})
export class NavBarModule {}
