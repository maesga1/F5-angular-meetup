import { Component, OnInit } from '@angular/core';
import { DogApiService } from '../../../services/dog-api-service.service';
import { CatApiService } from '../../../services/cat-api-service.service';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedButton: string = 'all';
  dogImage: string = '';
  catImage: string = '';
  images: string[] = [];
  imageMap: { [key: string]: string[] } = {
    all: [],
    dogs: [],
    cats: []
  };


  constructor(
    private dogApiService: DogApiService,
    private catApiService: CatApiService
  ) {}
  changeColor(button: string): void {
    this.selectedButton = button;
    this.loadImagesByButton();
  }
 
 onMouseEnter(button: string): void {
   if (!this.selectedButton) {
     const buttons = ['todos', 'perros', 'gatos'];
     buttons.splice(buttons.indexOf(button), 1);
     buttons.forEach(btn => this.removeButtonClass(btn));
   }
 }

 onMouseLeave(button: string): void {
   if (!this.selectedButton) {
     this.removeButtonClass(button);
   }
 }

 private removeButtonClass(button: string): void {
   const btnElement = document.querySelector(`button:contains(${button})`);
   if (btnElement) {
     btnElement.classList.remove('btn-selected');
   }
 }
    ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.dogApiService.getRandomDogImage().subscribe((dogData) => {
      this.dogImage = dogData.message;
    });

    this.catApiService.getRandomCatImage().subscribe((catData) => {
      this.catImage = catData[0].url;
    });

    this.dogApiService.getDogImages(50).subscribe((dogData) => {
      this.imageMap['dogs'] = dogData.message;
      this.loadImagesByButton();
    });

    this.catApiService.getCatImages(50).subscribe((catData) => {
      this.imageMap['cats'] = catData;
      this.loadImagesByButton();
    });
  }

  loadImagesByButton(): void {
    if (this.selectedButton === 'all') {
      this.images = this.imageMap['dogs'].concat(this.imageMap['cats']);
    } else if (this.selectedButton === 'dogs') {
      this.images = this.imageMap['dogs'];
    } else if (this.selectedButton === 'cats') {
      this.images = this.imageMap['cats'];
    }
  }
}