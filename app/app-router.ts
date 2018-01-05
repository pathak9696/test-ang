import { Routes } from "@angular/router";
import { UsersListComponent } from "./users-list.component";

export const appRouter:Routes = [
    {path: 'users', component: UsersListComponent},
    {path: '', redirectTo: '/users', pathMatch: 'full'}
]