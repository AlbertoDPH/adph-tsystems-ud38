import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  characters = [];

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(
      (result) => {
        this.characters = result;
      },
      (error) => {
        console.log('problemas');
      }
    );
  }
}
