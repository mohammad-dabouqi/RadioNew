import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'radios';
  myVar="";

  myList=[];
  selectedCity: string="";

   radios=[
    {
      name:"jenen",
      list:[{n:"Zain Radio",rsrc:"http://live.masterweb-ps.com:8006/;mp3"}, {n:"Albalad Radio" , src:"http://live.masterweb-ps.com:8006/;mp3"}] 
   },
    {
      name:"Hebron",
      list:[{n:"Orobah Radio",rsrc:"http://streamer.mada.ps:8052/orooba"}, {n:"Al-huryah Radio",src:"http://rs.hadara.ps:8000/;stream.mp33&13202692901&duration=99999&id=scplayer&autostart=true" }] 
    },

    {
      name:"Nablus",
      list:[{n:"Shabab Radio",rsrc:"https://streaming.zaytonatube.com/test2.aac"},{n:"Al-najah Radio",src:"http://rs.hadara.ps:8550/stream/;stream.mp3&13202692901&duration=99999&id=scplayer&autostart=true"}] 
    }
    ,

   {
    name:"Ramallah",
    list:[{n:"Ajial FM",rsrc:""}, {n:"Donya Radio",rsrc:"http://stream2.zaytonatube.com:8000/playlist.mp3"}] 
    },

    {
      name:"Tulkarm",
      list:[{n:"Kol El Nas",rsrc:""}] 
   } 
  ]


  onSelect(city:string): void {
    this.selectedCity = city;
  }

  buttonClick(pass:string){
  this.myVar=pass;
  }
}