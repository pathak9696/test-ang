"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_list_component_1 = require("./users-list.component");
exports.appRouter = [
    { path: 'users', component: users_list_component_1.UsersListComponent },
    { path: '', redirectTo: '/users', pathMatch: 'full' }
];
//# sourceMappingURL=app-router.js.map