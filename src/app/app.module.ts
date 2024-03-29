import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './cmps/app-root/app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { EventListComponent } from './cmps/event-list/event-list.component';
import { EventPreviewComponent } from './cmps/event-preview/event-preview.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { FilterComponent } from './cmps/filter/filter.component';
import { CotactDetailsComponent } from './pages/cotact-details/cotact-details.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AppHeaderComponent,
    ContactPageComponent,
    ContactListComponent,
    ContactPreviewComponent,
    EventListComponent,
    EventPreviewComponent,
    EventDetailsComponent,
    FilterComponent,
    CotactDetailsComponent,
    EditPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
