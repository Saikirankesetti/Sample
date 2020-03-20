import { ReadCustomerComponent } from './dashboard/read-customer/read-customer.component';
import { CustomerdetailsComponent } from './dashboard/customerdetails/customerdetails.component';
import { AddCustomerComponent } from './dashboard/add-customer/add-customer.component';
import { CustomerComponent } from './dashboard/customer/customer.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, DashboardModule, HttpClientModule, FormsModule,
    RouterModule.forRoot([
      {path: 'customer', component: CustomerComponent},
      {path: 'addcustomer', component: AddcustomerComponent},
      {path: 'readcustomer', component: ReadcustomerComponent},
      {path: 'updatecustomer/:id', component: customerdetailsComponent},
      {path: '', component: customerComponent},
      {path : '**', redirectTo: '/', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
