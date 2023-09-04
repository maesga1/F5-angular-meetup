import { Component, OnInit } from '@angular/core';
import { DogApiService } from 'src/app/services/dog-api-service.service';

@Component({
  selector: 'app-newadoption',
  templateUrl: './newadoption.component.html',
  styleUrls: ['./newadoption.component.css']
})
export class NewadoptionComponent implements OnInit {
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



    this.dogApiService.getDogImages(50).subscribe((dogData) => {
      this.imageMap['dogs'] = dogData.message;
      this.images = this.imageMap['dogs'];
    });

  }

}

