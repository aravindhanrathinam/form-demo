import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebitAmountComponent } from './debit-amount/debit-amount.component';
import { GroupingAmountComponent } from './grouping-amount/grouping-amount.component';
import { IgaAccountsComponent } from './iga-accounts/iga-accounts.component';


const routes: Routes = [ 
  { path: '',   redirectTo: '/debitAmount', pathMatch: 'full' },
  { path: 'debitAmount', component: DebitAmountComponent },
  { path: 'groupingAmount', component: GroupingAmountComponent },
  { path: 'igaAccounts', component: IgaAccountsComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
