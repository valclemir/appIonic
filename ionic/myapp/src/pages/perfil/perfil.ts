import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoPlayer, VideoOptions } from '@ionic-native/video-player';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  public video = this.videoPlayer;
  public urlVideo = "https://www.youtube.com/watch?v=7cDYYvOhKwg";
  videoOptions: VideoOptions;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private videoPlayer: VideoPlayer) {
  }

  
  stopVideo(){
    this.videoPlayer.close();
    console.log("Video has stopped")
  }
  async playVideo(){
    try{
      this.videoOptions = {
        volume:0.5
      }

    setTimeout(() =>{
      this.stopVideo();
    }, 3000);

    await this.videoPlayer.play(this.urlVideo, this.videoOptions);
    console.log("Video has been completed");
    }
    catch(e){
      console.log(e);
    }
  }
  ionViewDidLoad() {
    this.playVideo();
  }

}
