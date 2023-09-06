import { Component, OnInit } from '@angular/core';
import { DogApiService } from '../../services/dog-api-service.service';
import { Dogs } from '../../model/Dogs.model';

@Component({
  selector: 'app-newadoption',
  templateUrl: './newadoption.component.html',
  styleUrls: ['./newadoption.component.css'],
})
export class NewadoptionComponent implements OnInit {
  images: Dogs[] = [];

  constructor(private dogApiService: DogApiService) {}

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.dogApiService.getDogImages(4).subscribe((dogData:any) => {
      this.images = dogData.message;
    });
  }
}
