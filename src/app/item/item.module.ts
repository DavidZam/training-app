import { CommonModule } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { ItemListComponent } from './item-list/item-list.component';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';

registerLocaleData(localeEs, 'es-ES', localeEsExtra);

@NgModule({
  declarations: [ItemListComponent],
  imports: [CommonModule, MatCardModule, FlexModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-ES',
    },
  ],
})
export class ItemModule {}
