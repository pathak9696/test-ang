import { NgModule } from "@angular/core"
import { BrowserModule } from '@angular/platform-browser'
import { MyAppComponent } from "./my-app.component";
import { ChildEle } from "./child-ele.component";
import { RouterModule } from "@angular/router";
import { appRouter } from "./app-router";
import { UsersListComponent } from "./users-list.component";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRouter)
    ],
    declarations: [MyAppComponent, UsersListComponent, ChildEle],
    bootstrap: [MyAppComponent]
})

export class AppModule {}