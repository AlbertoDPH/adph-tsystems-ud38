import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent {
  @Input() characters: any;

  name = '';
  image = '';

  constructor(){}


  ngOnInit(): void {
    this.name = this.characters.name;
    this.image = this.characters.image;
    console.log(this.name);
  }
}
