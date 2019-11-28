import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { DeleteComponent } from './delete/delete.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule ,ActivatedRoute} from '@angular/router';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DeleteComponent,
    ContactComponent,
    NotfoundComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      [{path:"", component:HomeComponent},
        {path:"home", component:HomeComponent},
                    {path:"contact", component:ContactComponent},
                      
                        {path:"register", component:RegisterComponent},
                      {path:"about", component:AboutComponent},
                      
                      {path:"delete/:Venue", component:DeleteComponent},
                      {path:"**", component:NotfoundComponent}
               ]),
               FormsModule
               
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
