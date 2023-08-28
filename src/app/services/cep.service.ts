import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiResult {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  cep: string;
}

@Injectable({
  providedIn: 'root'
})
export class CEPService {

    constructor(private http: HttpClient) { }

    getCEP(cep: string): Observable<ApiResult> {
      return this.http.get<ApiResult>(`${environment.cepAPIUrl}${cep}`);
    }

}
