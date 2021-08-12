import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {
  bmi = '';
  interpreter ='';
  result = '';
  constructor(private route: ActivatedRoute) {
    this.bmi = route.snapshot.paramMap.get('bmi')!;
    this.result = route.snapshot.paramMap.get('result')!;
    this.interpreter = route.snapshot.paramMap.get('interpreter')
  }

  ngOnInit(): void {
  }

}
