import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/Interfaces/character.interface';
import { CharacteresService } from 'src/app/Services/characteres.service';

@Component({
  selector: 'app-characteres',
  templateUrl: './characteres.component.html',
  styleUrls: ['./characteres.component.css']
})
export class CharacteresComponent implements OnInit {

  characters: Character[] = [];

  constructor(
    private characterService: CharacteresService,
  ){}

  ngOnInit(): void {
    this.characterService.getAllCharacteres()
      .subscribe((characteres: Character[]) => {
        this.characters = characteres;
      });
  }

}
