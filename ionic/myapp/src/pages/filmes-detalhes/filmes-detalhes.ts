import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FilmesDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filmes-detalhes',
  templateUrl: 'filmes-detalhes.html',
  providers:[
    MoovieProvider
  ]
})


export class FilmesDetalhesPage {

  public filme;
  public filmeid;
  public loading;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public movieProvider: MoovieProvider,
    public loadingCtrl: LoadingController
  ) {
  }

  //Função que mostra a mensagem carregando, enquanto os filmes não aparecem
  abreCarregando() {
    this.loading = this.loadingCtrl.create({
      content: 'Carregando detalhes...'
    });
  
    this.loading.present();
  }

  fechaCarregando(){
    this.loading.dismiss();
  }
  ionViewDidEnter() {
    this.filmeid = this.navParams.get("id") //O método this.navParams.get(), traz todos os paramentros enviados para está pagina, que no 
                                            //caso eu especifiquei o "id" do filme.
    this.abreCarregando();
    console.log("Filme id recebido ", this.filmeid)    
    this.movieProvider.getMoviesDetails(this.filmeid).subscribe(   //Função para retorno de JSON
      data=>{
        this.filme =data;
        console.log(this.filme);
        this.fechaCarregando();
        
        
      }, error=>{
        console.log(error)
        this.fechaCarregando();
      }
    )                                        
  }

}
