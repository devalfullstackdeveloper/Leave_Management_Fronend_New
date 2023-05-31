import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard.component';
import { MatButtonModule, MatCardModule, MatIconModule, MatSidenavModule, MatToolbarModule } from '@angular/material';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
  ]
})
export class DashboardModule { }
