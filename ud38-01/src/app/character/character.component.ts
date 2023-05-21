import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit{
  @Input() character: any;

  name = '';
  image = '';

  constructor(){}


  ngOnInit(): void {
    this.name = this.character.name;
    this.image = this.character.image;
    // console.log(this.name);
  }
}
