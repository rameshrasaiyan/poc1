import { Component, OnInit } from '@angular/core';
import {MenuService} from './menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public menus;
  constructor(private _ms: MenuService) { }

ngOnInit()
{
   this.getMenus();
 }

 getMenus()
 {
    this._ms.getMenus().subscribe(
       data => { this.menus = data},
       err => console.error(err),
     );
 }
}
