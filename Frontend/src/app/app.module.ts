import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerCreateComponent } from './server/server-create/server-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ServerListComponent } from './server/server-list/server-list.component';
import { WebsiteListComponent } from './website/website-list/website-list.component';
import { WebsiteCreateComponent } from './website/website-create/website-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { WpUserListComponent } from './wp-user/wp-user-list/wp-user-list.component';
import { WpUserCreateComponent } from './wp-user/wp-user-create/wp-user-create.component';
import { SearchComponent } from './search/search.component';
import { ServerEditComponent } from './server/server-edit/server-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerCreateComponent,
    ServerListComponent,
    HeaderComponent,
    WebsiteListComponent,
    WebsiteCreateComponent,
    WpUserListComponent,
    WpUserCreateComponent,
    SearchComponent,
    ServerEditComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
