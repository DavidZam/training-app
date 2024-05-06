import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  declarations: [ItemListComponent],
  imports: [CommonModule, MatCardModule],
})
export class ItemModule {}
