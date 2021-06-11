import { Component, Input, OnInit } from '@angular/core';
import { Recette } from 'src/app/modeles/recette';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  @Input() public recette!: Recette;
  
  constructor() { }

  ngOnInit(): void {
  }

}
