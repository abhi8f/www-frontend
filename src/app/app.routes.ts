import { Routes } from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { AddUserComponent } from './component/add-user/add-user.component';

export const routes: Routes = [
    {
        path: 'userList',
        component: UserComponent
    },
    {
        path: 'addUser',
        component: AddUserComponent
    }
];
