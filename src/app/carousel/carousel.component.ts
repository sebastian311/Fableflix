import { Component, OnInit } from '@angular/core';
import { BookType } from '../types/bookType';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  dataMock: BookType[] = [
    {
      img: 'book1.jpg',
      title: 'Book 1',
      genre: 'Fiction'
    },
    {
      img: 'book2.jpg',
      title: 'Book 2',
      genre: 'Fantasy'
    },
    {
      img: 'book3.jpg',
      title: 'Book 3',
      genre: 'Mystery'
    },

    {
      img: 'book1.jpg',
      title: 'Book 4',
      genre: 'Fiction'
    },
    {
      img: 'book2.jpg',
      title: 'Book 5',
      genre: 'Fantasy'
    },
    {
      img: 'book3.jpg',
      title: 'Book 6',
      genre: 'Mystery'
    },

    {
      img: 'book1.jpg',
      title: 'Book 7',
      genre: 'Fiction'
    },
    {
      img: 'book2.jpg',
      title: 'Book 8',
      genre: 'Fantasy'
    },
    {
      img: 'book3.jpg',
      title: 'Book 9',
      genre: 'Mystery'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  navigateToSection(fragment: string) {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }
}
