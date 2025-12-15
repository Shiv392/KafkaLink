import { Routes } from "@angular/router"
import { UrlDashboard } from "./components/url-dashboard/url-dashboard"

export const layout_routes : Routes = [
    {
        path : '', loadComponent : ()=> import('./components/url-dashboard/url-dashboard').then(comp=> comp.UrlDashboard)
    }
]