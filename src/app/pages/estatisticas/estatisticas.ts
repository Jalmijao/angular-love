import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-estatisticas',
  standalone: true,
  imports: [MatCardModule, CanvasJSAngularChartsModule],
  templateUrl: './estatisticas.html',
  styleUrl: './estatisticas.scss'
})
export class Estatisticas  {
 

  chart: any;

  chartOptions = {
    theme: "light2",
    animationEnabled: true,
    zoomEnabled: true,
    title: {
      text: "Felicidade ao longo do tempo"
    },
    axisY: {
      title: "% Felicidade",
      suffix: "%"
    },
    data: [{
      type: "line",
      xValueFormatString: "YYYY",
      yValueFormatString: "##,##%",
      dataPoints: [
        { x: new Date(2024, 9, 10), y: 10, indexLabel: "Primeira mensagem" },
        { x: new Date(2024, 9, 29), y: 70, indexLabel: "Primeiro encontro" },
        { x: new Date(2024, 11, 9), y: 85, indexLabel: "Bar do Roque" },
        { x: new Date(2024, 12, 5), y: 50, indexLabel: "Primeiro Pedido" },
        { x: new Date(2024, 12, 31), y: 75, indexLabel: "Ubatuba" },
        { x: new Date(2025, 1, 12), y: 85, indexLabel: "Ida pra minas" },
        { x: new Date(2025, 1, 25), y: 90, indexLabel: "Rio de Janeiro" },
        { x: new Date(2025, 1, 31), y: 30, indexLabel: "Bar do roque 2" },
        { x: new Date(2025, 2, 16), y: 80, indexLabel: "Primeira ida pra SJ" },
        { x: new Date(2025, 3, 7), y: 90, indexLabel: "Segundo Pedido" },
        { x: new Date(2025, 5, 2), y: 95, indexLabel: "Paraty" },
        { x: new Date(2025, 5, 16), y: 97, indexLabel: "Meu aniversário" },
        { x: new Date(2025, 6, 7), y: 99, indexLabel: "SPA day" }
      ]
    }]
  }

  
}
