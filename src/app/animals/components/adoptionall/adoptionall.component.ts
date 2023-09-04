import { Component, OnInit } from '@angular/core';
import { DogApiService } from '../../../services/dog-api-service.service';

@Component({
  selector: 'app-adoptionall',
  templateUrl: './adoptionall.component.html',
  styleUrls: ['./adoptionall.component.css']
})
export class AdoptionallComponent implements OnInit {
  selectedButton: string = 'all';
  dogImage: string = '';
  images: string[] = [];
  imageMap: { [key: string]: string[] } = {
    dogs: [],

  };

  constructor(
    private dogApiService: DogApiService,
  
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  loadImages(): void {
    this.dogApiService.getRandomDogImage().subscribe((dogData) => {
      this.dogImage = dogData.message;
    });



    this.dogApiService.getDogImages(50).subscribe((dogData) => {
      this.imageMap['dogs'] = dogData.message;
    
    });

  }
}
