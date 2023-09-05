import { Component, OnInit } from '@angular/core';
import { DogApiService } from '../../../services/dog-api-service.service';

@Component({
  selector: 'app-adoptioncards',
  templateUrl: './adoptioncards.component.html',
  styleUrls: ['./adoptioncards.component.css']
})
export class AdoptioncardsComponent  implements OnInit {
  selectedButton: string = 'all';
  dogImage: string = '';
  images: string[] = [];
  imageMap: { [key: string]: string[] } = {
    all: [],
    dogs: [],

  };

  constructor(
    private dogApiService: DogApiService,
  
  ) {}
  
    ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.dogApiService.getRandomDogImage().subscribe((dogData) => {
      this.dogImage = dogData.message;
    });



    this.dogApiService.getDogImages(20).subscribe((dogData) => {
      this.imageMap['dogs'] = dogData.message;
      this.images = this.imageMap['dogs'];
    });

  }

}

