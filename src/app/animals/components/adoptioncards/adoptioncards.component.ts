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
  images: Dogs[] = [];

  constructor(private dogApiService: DogApiService) {}

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.dogApiService.getDogImages(20).subscribe((dogData:any) => {
      this.images = dogData.message;
      console.log(this.images);
    });
  }
}
