import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { Sidebar } from './sidebar/sidebar';
import { MatDrawer, MatDrawerContainer, MatSidenav } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { Footer } from './footer/footer';
import { Viagens } from './pages/viagens/viagens';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home,Sidebar,MatSidenav,MatButtonModule,MatDrawerContainer,MatDrawer,MatIconModule,Footer,MatTabsModule,
    Viagens
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'love-project';
}
