"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UsersListComponent = /** @class */ (function () {
    function UsersListComponent() {
    }
    UsersListComponent.prototype.ngOnInit = function () {
        this.users = [{ "name": { "title": "mr", "first": "kevin", "last": "hopkins" }, "profile": "https://randomuser.me/api/portraits/med/men/25.jpg" }, { "name": { "title": "mr", "first": "aiden", "last": "evans" }, "profile": "https://randomuser.me/api/portraits/med/men/69.jpg" }, { "name": { "title": "ms", "first": "regina", "last": "webb" }, "profile": "https://randomuser.me/api/portraits/med/women/13.jpg" }, { "name": { "title": "mr", "first": "jerry", "last": "allen" }, "profile": "https://randomuser.me/api/portraits/med/men/51.jpg" }, { "name": { "title": "miss", "first": "jenny", "last": "simpson" }, "profile": "https://randomuser.me/api/portraits/med/women/14.jpg" }, { "name": { "title": "mr", "first": "danny", "last": "young" }, "profile": "https://randomuser.me/api/portraits/med/men/67.jpg" }, { "name": { "title": "mr", "first": "morris", "last": "cunningham" }, "profile": "https://randomuser.me/api/portraits/med/men/96.jpg" }, { "name": { "title": "miss", "first": "kristin", "last": "rose" }, "profile": "https://randomuser.me/api/portraits/med/women/80.jpg" }, { "name": { "title": "ms", "first": "beverley", "last": "hunt" }, "profile": "https://randomuser.me/api/portraits/med/women/49.jpg" }, { "name": { "title": "mr", "first": "brad", "last": "torres" }, "profile": "https://randomuser.me/api/portraits/med/men/74.jpg" }, { "name": { "title": "ms", "first": "kenzi", "last": "rivera" }, "profile": "https://randomuser.me/api/portraits/med/women/8.jpg" }, { "name": { "title": "mr", "first": "owen", "last": "garcia" }, "profile": "https://randomuser.me/api/portraits/med/men/15.jpg" }, { "name": { "title": "mr", "first": "jesus", "last": "hill" }, "profile": "https://randomuser.me/api/portraits/med/men/74.jpg" }, { "name": { "title": "mr", "first": "gilbert", "last": "hudson" }, "profile": "https://randomuser.me/api/portraits/med/men/48.jpg" }, { "name": { "title": "mr", "first": "shawn", "last": "lee" }, "profile": "https://randomuser.me/api/portraits/med/men/69.jpg" }, { "name": { "title": "miss", "first": "annette", "last": "coleman" }, "profile": "https://randomuser.me/api/portraits/med/women/33.jpg" }, { "name": { "title": "mr", "first": "vincent", "last": "thompson" }, "profile": "https://randomuser.me/api/portraits/med/men/22.jpg" }, { "name": { "title": "ms", "first": "leona", "last": "jennings" }, "profile": "https://randomuser.me/api/portraits/med/women/64.jpg" }, { "name": { "title": "mr", "first": "louis", "last": "gomez" }, "profile": "https://randomuser.me/api/portraits/med/men/24.jpg" }, { "name": { "title": "miss", "first": "leslie", "last": "burns" }, "profile": "https://randomuser.me/api/portraits/med/women/68.jpg" }];
    };
    UsersListComponent = __decorate([
        core_1.Component({
            selector: 'users-list',
            template: "\n    <child-ele \n        *ngFor=\"let user of users\"\n        [user]=\"user\"></child-ele>\n    "
        })
    ], UsersListComponent);
    return UsersListComponent;
}());
exports.UsersListComponent = UsersListComponent;
//# sourceMappingURL=users-list.component.js.map