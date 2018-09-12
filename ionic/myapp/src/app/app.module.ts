import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http'; 
import { HttpClientModule } from '@angular/common/http'; 
import { VideoPlayer } from '@ionic-native/video-player'
//import { FeedPageModule } from '../pages/feed/feed.module';
//import { IntroPageModule } from '../pages/intro/intro.module';
import { FeedPage } from '../pages/feed/feed';
import { IntroPage } from '../pages/intro/intro';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { SobrePage } from '../pages/sobre/sobre';
import { PerfilPage } from '../pages/perfil/perfil';
import { FilmesDetalhesPage } from '../pages/filmes-detalhes/filmes-detalhes';
//import { MoovieProvider } from '../providers/moovie/moovie';
//foi preciso importar o module HttpModule e HttpClientModule para funcionar o provider Movie.

//Obs: Toda pagina nova criada, deve ser declarada em Declarations e entryComponents, pode ser declarada também, dentro de imports
//Mas n é uma boa pratica, boa pratica é, declarar paginas sempre em Declarations e entryComponents.
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FeedPage,
    IntroPage,
    ConfiguracoesPage,
    SobrePage,
    PerfilPage,
    FilmesDetalhesPage,
    //VideoPlayer
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //FeedPageModule,
    //IntroPageModule,
    HttpModule,
    HttpClientModule,
    //VideoPlayer
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FeedPage,
    IntroPage,
    ConfiguracoesPage,
    SobrePage,
    PerfilPage,
    FilmesDetalhesPage,
    //VideoPlayer
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //MoovieProvider,
    HttpModule,
    VideoPlayer
    
  
  ]
})
export class AppModule {}
