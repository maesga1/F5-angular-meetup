import { Component, OnInit } from '@angular/core';
import { DogApiService } from '../../services/dog-api-service.service';
import { Dogs } from '../../model/Dogs.model';

@Component({
  selector: 'app-adoptioncards',
  templateUrl: './adoptioncards.component.html',
  styleUrls: ['./adoptioncards.component.css'],
})
export class AdoptioncardsComponent implements OnInit {
  selectedButton: string = 'all';
<<<<<<< HEAD
  images: Dogs[] = [];

  constructor(private dogApiService: DogApiService) {}

=======
  dogImage: string = '';
  images: string[] = [];
  imageMap: { [key: string]: string[] } = {
    all: [],
    dogs: [],
  };

  constructor(private dogApiService: DogApiService) {}

>>>>>>> ecef9c7bdc66b989384a4aa50cc19d3b50d9814b
  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
<<<<<<< HEAD
    this.dogApiService.getDogImages(20).subscribe((dogData:any) => {
      this.images = dogData.message;
      console.log(this.images);
    });
  }
}
=======
    this.dogApiService.getDogImages(20).subscribe((dogData) => {
      this.imageMap['dogs'] = dogData.message;
      this.images = this.imageMap['dogs'];
    });
  }
}
>>>>>>> ecef9c7bdc66b989384a4aa50cc19d3b50d9814b
