import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';
import { IntroPage } from '../intro/intro';
import { ConfiguracoesPage } from '../configuracoes/configuracoes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
//Adiciona abas no rodapé
  tab1Root = HomePage;
  tab4Root = FeedPage;
  tab5Root = IntroPage;
  tab6Root = ConfiguracoesPage;

  constructor() {

  }
}
