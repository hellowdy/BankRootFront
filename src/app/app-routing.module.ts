import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountComponent } from "./account/account.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { TransactionComponent } from "./transaction/transaction.component";

const routes: Routes = [
{ path: 'register', component: RegisterComponent},
{ path: '', component: HomeComponent},
{ path: 'login', component: LoginComponent},
{ path: 'dashboard', component: DashboardComponent},
{ path: 'transaction', component: TransactionComponent},
{ path: 'account', component: AccountComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}