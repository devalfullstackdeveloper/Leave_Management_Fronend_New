import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge'

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    // MatTableModule,
    MatBadgeModule,
    // BrowserAnimationsModule
  ]
})
export class LayoutModule { }
