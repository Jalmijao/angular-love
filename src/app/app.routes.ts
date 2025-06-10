import { Routes } from '@angular/router';
// Update the path below to the correct location of HomeComponent
import { Home } from '../app/pages/home/home'; // <-- Change this path if needed
import { Viagens } from './pages/viagens/viagens';
import { Estatisticas } from './pages/estatisticas/estatisticas';



export const routes: Routes = [
    { path: '', component: Home },
    { path: 'viagens', component: Viagens },
    { path: 'estatisticas', component: Estatisticas }

  

];
