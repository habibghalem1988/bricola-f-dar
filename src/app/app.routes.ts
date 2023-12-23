import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TradesListComponent } from './pages/trades-list/trades-list.component';
import { TradeDetailsComponent } from './pages/trade-details/trade-details.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthComponent } from './pages/auth/auth.component';
import { _404Component } from './pages/404/404.component';
export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'trades-list',
        component: TradesListComponent
    },
    {
        path:'trade-details',
        component: TradeDetailsComponent
    },
    {
        path:'authentication',
        component: AuthComponent
    },
    {
        path:'**',
        component: _404Component
    }

];
