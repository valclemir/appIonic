import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
  //Variávies 
  private baseApiPath = "https://api.themoviedb.org/3";
  private apiKey = "39b6db1ca49ba2af7ec7eedf5ea0f8b7";

  constructor(public http: HttpClient) {
  }
  getLatestMovies(page = 1){
    return this.http.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=`+this.apiKey+"&language=pt-BR");
  }

  getMoviesDetails(filmeid){
    return this.http.get(this.baseApiPath + `/movie/${filmeid}?api_key=`+this.apiKey+"&language=pt-BR");
  }
}
