import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TradesListComponent } from './pages/trades-list/trades-list.component';
import { TradeDetailsComponent } from './pages/trade-details/trade-details.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthComponent } from './pages/auth/auth.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
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
        component: NotFoundComponent
    }

];
