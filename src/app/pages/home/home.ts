import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterOutlet, MatIconModule,HttpClientModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit{

   private http = inject(HttpClient); // Dependency Injection

  valorParametro: string | null = null; // You can bind this to the template if needed
  quilometrosAndados: string = ""; // Example value, can be bound to the template
  totalViagens: string = ""; // Example value, can be bound to the template

  ngOnInit() {
    var apiUrl = 'https://1ytgreaqj5.execute-api.sa-east-1.amazonaws.com/retrieve-love?nomeParametro=';
    apiUrl = apiUrl + 'totalViagens';
    this.http.get<{ nomeParametro: string, valorParametro: string }>(apiUrl).subscribe({
      next: (data) => {
        this.totalViagens = data.valorParametro;
      },
      error: (err) => {
        console.error("API call failed", err);
      }
    });

    apiUrl = 'https://1ytgreaqj5.execute-api.sa-east-1.amazonaws.com/retrieve-love?nomeParametro=';
 	apiUrl = apiUrl + 'quilometrosAndados';
    this.http.get<{ nomeParametro: string, valorParametro: string }>(apiUrl).subscribe({
      next: (data) => {
        this.quilometrosAndados = data.valorParametro +" KM";
      },
      error: (err) => {
        console.error("API call failed", err);
      }
    });

  }
}
