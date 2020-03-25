import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import 'rxjs/add/operator/catch';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Arquivo } from '../model/arquivo';

@Injectable({
  providedIn: 'root'
})
export class ArquivosService {
  domain = environment.domain;
  Arquiv ;
  constructor(
    private http: HttpClient
  ) { }

  public addArquivo(formData):Observable<any>{
    return this.http.post(this.domain + 'api/addArquivo', formData).pipe(
      catchError(this.handleError))
  }
  public getArquivos(){
    return this.http.get(this.domain + 'api/getArquivos').pipe(
    map(res=>res))
    .catch(err=> Observable.throw(err.message));
}
public getArquivo(id: string){
  return this.http.get(this.domain + 'api/oneCategories/' +id);
}
handleError(error: HttpErrorResponse) {
  let msg = '';
  if (error.error instanceof ErrorEvent) {
    // client-side error
    msg = error.error.message;
  } else {
    // server-side error
    msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(msg);
}
}
