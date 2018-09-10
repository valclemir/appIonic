import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';
import { FilmesDetalhesPage } from '../filmes-detalhes/filmes-detalhes';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[
    MoovieProvider //Provider local, funciona apenas na pagina feed. Todoa vez que se cria um provider, automaticamente é criado 
                    //Um provider global em app.modules.ts, é importante comenta-lo, caso ele n precise ser usado em toda app. 
  ]
})

export class FeedPage {
  //Para acessar cada valor do objeto, deve se fazer: objeto_feed.valor => objeto_feed.titulo, objeto_feed.data ...
  public objeto_feed = {
    titulo:"José Valclemir Rodrigues da Silva",
    data:"Setembro 9, 2018, 19:32",
    descricao:"Estou desenvolvendo um app incrivel...",
    qntd_likes:12,
    qntd_comments:4,
    time_comment:"12h ago"
  }

  public Lista_filmes = new Array<any>();
  public nome_usuario:string = "Valclemir";
  public loading;
  public refresher;
  public isRefreshing: boolean = false;
  public page = 1;
  public infiniteScroll;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MoovieProvider, //provider add 
    public loadingCtrl: LoadingController
  ) {
  }


  doInfinite(infiniteScroll) {
    this.page ++;
    this.infiniteScroll = infiniteScroll;
    this.carregandoFilmes();
  }

  
  //Abrir detalhes 
  abrirDetalhes(filme){ 
    console.log(filme) 
    this.navCtrl.push(FilmesDetalhesPage, {id: filme.id}); //passa uma variável com o filme.id para a pagina FilmesDetalhes
  }

  //Funcao espera carregando por json
  abreCarregando() {
    this.loading = this.loadingCtrl.create({
      content: 'Carregando filmes...'
    });
   
  
    this.loading.present();
  }
  
  //fecha depois de carregar json
  fechaCarregando(){
    this.loading.dismiss();

  
  }
 //user defined function
  public RetornaNumero(Num1: number, Num2: number):void{
    alert(Num1+Num2);
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;

    this.carregandoFilmes();
  }
  
  //todas as funções criadas, devem ser incluidas dentro dessa ionViewDidLoad
  ionViewDidEnter() {
    this.carregandoFilmes();
   
  }
 
  carregandoFilmes(newpage: boolean = false){
       //this.RetornaNumero(10, 20);
       this.abreCarregando();
       this.movieProvider.getLatestMovies(this.page).subscribe(
         data => {
           //Transforma a resposta da api em um objeto de qualquer tipo
           const response = JSON.stringify(data);
           //Convert o texto cru da api para json(Transforma a resposta em objeto json)
           const objeto_retorno = JSON.parse(response);
           //let objeto_retorno = JSON.parse(response._body || '{}');
           this.Lista_filmes = objeto_retorno.results;
           console.log(this.Lista_filmes);
           this.fechaCarregando();
           if(this.isRefreshing){
             this.refresher.complete();
             //se completou o refresh, ele não está mais carregando, portando, isRefreshing vai ser false
             this.isRefreshing = false;

             if(newpage){
              this.Lista_filmes = this.Lista_filmes.concat(objeto_retorno.results);   
              console.log(this.page);
              console.log(this.Lista_filmes);
              this.infiniteScroll.complete();
            }
             else{
              this.Lista_filmes = objeto_retorno.results;
             }
           }
         },error => {
           console.log(error);
           this.fechaCarregando();
           if(this.isRefreshing){
             this.refresher.complete();
           }
         }
       )
  }
}
