import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  edad = 25;
  peso = 60;
  altura = 170;
  sexo = "masculino";
  bmi = 0;
  result = "";
  interpreter = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cambiarAltura(event: any): void {
    this.altura = event.target.value;
  }

  masculino(){
    this.sexo = 'masculino';
  }

  femenino(){
    this.sexo = 'femenino';
  }

  calcularBMI(){
    this.bmi = (this.peso / Math.pow((this.altura/100),2));
    this.conditionresult();
    console.log(this.result);
    this.router.navigate(['/resultado', this.bmi.toFixed(1), this.result, this.interpreter]);
  }

  conditionresult(){
    switch(this.bmi!=0){
      case (this.bmi <= 18.5):
        this.result = "Muy Delgado";
        this.interpreter = "Debes comer Mejor";
        break;
      case (this.bmi <= 24.9):
        this.result = "Peso Normal";
        this.interpreter = "Felicidades tienes un Peso adecuado";
        break;
      case (this.bmi <= 29.9):
        this.result = "Sobrepeso";
        this.interpreter = "Tienes un peso corporal superior al normal, intenta ejercitarte";
        break;
      case (this.bmi <= 34.9):
        this.result = "Obesidad tipo I";
        this.interpreter = "Cuidado, mejora tu dieta y visita tu medico de confianza";
        break;
      case (this.bmi <= 39.9):
        this.result = "Obesidad tipo II";
        this.interpreter = "Cuidado, mejora tu dieta y visita tu medico de confianza";
        break;
      case (this.bmi >= 40.9):
        this.result = "Obesidad tipo III";
        this.interpreter = "Cuidado, mejora tu dieta y visita tu medico de confianza";
        break;
    }
  }
}
