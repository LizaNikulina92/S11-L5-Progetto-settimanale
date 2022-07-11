import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  imgArr:Array<any> = [
    {
      'title': 'Image 1',
      'url': 'https://i.ytimg.com/vi/8oXedDVaK4Q/maxresdefault.jpg'
    },
    {
      'title': 'Image 2',
      'url': 'https://cdn.wallpapersafari.com/62/31/m28dwG.jpg'
    },
    {
      'title': 'Image 3',
      'url': 'https://cdn.vox-cdn.com/thumbor/1vvzYB385vil078m7tuONqnK7IQ=/0x0:1920x1080/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/51770327/maxresdefault.0.jpg'
    },
    {
      'title': 'Image 4',
      'url': 'https://c4.wallpaperflare.com/wallpaper/764/30/408/landscape-mountains-the-city-art-wallpaper-preview.jpg'
    },
    {
      'title': 'Image 5',
      'url': 'https://s26162.pcdn.co/wp-content/uploads/2020/06/10_E030JX-1240x670.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
