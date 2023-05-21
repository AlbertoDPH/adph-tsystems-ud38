import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ud37-01';

  characters: any = null;

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http
      .get('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8')
      .subscribe(
        (result) => {
          this.characters = result;
        },
        (error) => {
          console.log('problemas');
        }
      );
  }
}
