import { Component, OnInit } from '@angular/core';

const Heroes = [
{name:'Dashboard',
  child:[{name:'home'}, {name:'about'}]},
{name:'Tenants'},
{name:'POs'},
{name:'Admin'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
title = 'trackme';
  heroes = Heroes;
}
