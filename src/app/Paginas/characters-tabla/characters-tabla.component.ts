import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/Interfaces/character.interface';
import { CharacteresService } from 'src/app/Services/characteres.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-characters-tabla',
  templateUrl: './characters-tabla.component.html',
  styleUrls: ['./characters-tabla.component.css']
})
export class CharactersTablaComponent implements OnInit {

  dataLoaded: boolean = false;
  dataSource!: MatTableDataSource<Character>;
  displayedColumns: string[] = ['fullName','title','family'];

  constructor(
    private characterService: CharacteresService,
  ){}

  ngOnInit(): void {
    this.characterService.getAllCharacteres()
      .subscribe((characters: Character[])=>{
        this.dataSource = new MatTableDataSource(characters);
        this.dataLoaded = true;
      });
  }
}
