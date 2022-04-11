import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {ImageModule} from 'primeng/image';

import {SelectButtonModule} from 'primeng/selectbutton';
import { DebitAmountComponent } from './debit-amount/debit-amount.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { GroupingAmountComponent } from './grouping-amount/grouping-amount.component';
import {TableModule} from 'primeng/table';
import { IgaAccountsComponent } from './iga-accounts/iga-accounts.component';


@NgModule({
  declarations: [
    AppComponent,
    DebitAmountComponent,
    GroupingAmountComponent,
    IgaAccountsComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    ImageModule,
    SelectButtonModule,
    AutoCompleteModule,
    InputTextModule,
    DropdownModule,
    TableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
