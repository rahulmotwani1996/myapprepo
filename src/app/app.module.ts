import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { FeedbackComponent } from './feedback/feedback.component';
import { HeaderComponent } from './header/header.component';
import { StarRatingModule } from 'angular-star-rating';
import { FeedbackCategoryComponent } from './feedback-category/feedback-category.component';
import { AdminComponent } from './admin/admin.component';
import { ChartComponent } from './chart/chart.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { AppRoutingModule } from './app-routing.module';
import { FeedbackItemComponent } from './feedback-item/feedback-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    HeaderComponent,
    FeedbackCategoryComponent,
    AdminComponent,
    ChartComponent,
    FeedbackListComponent,
    FeedbackItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    CustomMaterialModule,
    StarRatingModule.forRoot(),
    AppRoutingModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
