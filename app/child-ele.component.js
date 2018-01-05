"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ChildEle = /** @class */ (function () {
    function ChildEle() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ChildEle.prototype, "user", void 0);
    ChildEle = __decorate([
        core_1.Component({
            selector: 'child-ele',
            template: "\n        <div>\n            <img [src]=\"user.profile\" height=\"25\"/>\n            <h3>{{ user.name.title }} {{user.name.first}} {{user.name.last}}</h3>\n        </div>\n    ",
            styles: ["\n        div {display: flex}\n        div > img { width: 25px; padding-right: 10px;}\n    "]
        })
    ], ChildEle);
    return ChildEle;
}());
exports.ChildEle = ChildEle;
// {"name":{"title":"mr","first":"kevin","last":"hopkins"},"profile":"https://randomuser.me/api/portraits/med/men/25.jpg"}
// 
//# sourceMappingURL=child-ele.component.js.map