import { Component, OnInit } from '@angular/core';
import { ApiApiService } from '../api/api.service';

@Component({
  selector: 'app-busca-cep',
  templateUrl: './busca-cep.page.html',
  styleUrls: ['./busca-cep.page.scss'],
})
export class BuscaCepPage implements OnInit {

  cep: any;

  constructor(private apiService: ApiApiService ) { }

  ngOnInit() {
  }

  buscaCEP() {

    this.apiService.get('14870-300').then((data) =>{
      this.cep = data;
    }).catch((err)=>{
      console.error(err);
    })

  }

}
