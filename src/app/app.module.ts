import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductElementComponent } from './product-element/product-element.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditWorkerComponent } from './edit-worker/edit-worker.component';
import { MyFilterPipe } from './shared/pipes/my-filter.pipe';
import { SurnameFilterPipe } from './shared/pipes/surname-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductElementComponent,
    ProductEditComponent,
    EditWorkerComponent,
    MyFilterPipe,
    SurnameFilterPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
