import { Injectable } from '@angular/core';

//Constante global para os métodos acessiveis
const config_key_name = "config";

@Injectable()
//Provider criado, ou insere em uma pagina ou diretamente no app.modules, para ficar global.
export class ConfigProvider {
  //Variávies 
  

  constructor() {
  }

  //recupera dados do localstorage 
  getConfigData():any{
    return localStorage.getItem(config_key_name);
  }
  //Grava dados do localstorage 
  setConfigData(showSlide?: boolean, name?:string, username?:string):any{
    let config = {
      showSlide: false,
      name: "",
      username:""
    };
    //Condições definidas, caso eu queira informar valores quando eu chamar o método setConfigData, lá em apps.component.ts. 
    if (showSlide){
      config.showSlide = showSlide;
    }

    if (name){
      config.name = name;
    }

    if (username){
      config.username = username;
    }

    localStorage.setItem(config_key_name, JSON.stringify(config));
  }
 
}
