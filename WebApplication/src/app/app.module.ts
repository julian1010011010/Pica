import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table'
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule} from '@angular/material/tooltip';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule} from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { HomeComponent } from './_pages/home/home.component';
import { MatGridListModule} from '@angular/material/grid-list';
import { CreateProjectComponent } from './_pages/create-project/create-project.component';
import { MatInputModule } from '@angular/material/input';
import { TableProjectComponent } from './_pages/table-project/table-project.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CreatePagoComponent } from './_pages/create-pago/create-pago.component';
import { TablePagoComponent } from './_pages/table-pago/table-pago.component';
import { PagoComponent } from './_pages/pago/pago.component';
import { ProyectoComponent } from './_pages/proyecto/proyecto.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavigationComponent,
    SkeletonComponent,
    SidenavComponent,
    CreateProjectComponent,
    TableProjectComponent,
    CreatePagoComponent,
    TablePagoComponent,
    PagoComponent,
    ProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatMenuModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatGridListModule,
    MatInputModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
