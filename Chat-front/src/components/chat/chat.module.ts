import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

const materials = [MatCardModule, MatInputModule];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, materials],
  declarations: [ChatComponent],
  exports: [ChatComponent],
})
export class ChatModule {}
