import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountComponent } from "./account/account.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { canActivate } from "./guard/auth.guard";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { TransactionComponent } from "./transaction/transaction.component";

const routes: Routes = [
{ path: 'register', component: RegisterComponent},
{ path: '', component: HomeComponent},
{ path: 'login', component: LoginComponent},
{ path: 'dashboard', component: DashboardComponent, canActivate: [canActivate]},
{ path: 'transaction', component: TransactionComponent, canActivate: [canActivate]},
{ path: 'account', component: AccountComponent, canActivate: [canActivate]},
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