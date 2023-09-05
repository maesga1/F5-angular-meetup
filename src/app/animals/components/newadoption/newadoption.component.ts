import { Component, OnInit } from '@angular/core';
import { DogApiService } from 'src/app/services/dog-api-service.service';

@Component({
  selector: 'app-newadoption',
  templateUrl: './newadoption.component.html',
  styleUrls: ['./newadoption.component.css'],
})
export class NewadoptionComponent implements OnInit {
  dogImage: string = '';
  images: string[] = [];
  imageMap: { [key: string]: string[] } = {
    dogs: [],
  };

  constructor(private dogApiService: DogApiService) {}

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.dogApiService.getDogImages(4).subscribe((dogData) => {
      this.imageMap['dogs'] = dogData.message;
      this.images = this.imageMap['dogs'];
    });
  }
}
