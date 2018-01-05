import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'child-ele',
    template: `
        <div>
            <img [src]="user.profile" height="25"/>
            <h3>{{ user.name.title }} {{user.name.first}} {{user.name.last}}</h3>
        </div>
    `,
    styles: [`
        div {display: flex}
        div > img { width: 25px; padding-right: 10px;}
    `]
})

export class ChildEle {
    @Input() user:any 
}

// {"name":{"title":"mr","first":"kevin","last":"hopkins"},"profile":"https://randomuser.me/api/portraits/med/men/25.jpg"}
//