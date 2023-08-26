import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BuscaCepPage } from '../busca-cep/busca-cep.page';



@Injectable({
  providedIn: 'root'
})
export class ApiApiService {
  constructor(public http: HttpClient) { 
  }




  get( cep: string): Promise<any> {
  
    return new Promise((resolve, reject) => {

      this.http.get(`https://brasilapi.com.br/api/cep/v1/${cep}`,{}).subscribe((data: any) => {
        return resolve(data);
      }, (err: any) => {
        return reject(err);            
      })

    });
    
    
  }


}

export interface BuscaCepPageData {
  BuscaCepPage:BuscaCepPage;
}