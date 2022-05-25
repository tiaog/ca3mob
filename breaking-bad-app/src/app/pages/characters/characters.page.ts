import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  characters: Observable<any>;
 
  constructor(private navController: NavController, private router: Router, private http: HttpClient) {
   }
   ngOnInit() {
    this.characters = this.http.get('https://www.breakingbadapi.com/api/characters');
  }

  openDetails(character) {
    let split = character.url.split('/');
    let char_id = split[split.length-2];
    this.router.navigateByUrl(`/tabs/characters/${char_id}`);
  }
}
