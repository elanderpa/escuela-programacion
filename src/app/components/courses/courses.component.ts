import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public courses = [
    {
      img: 'https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg',
      title: 'Card title',
      text: 'Some quick example text to build on the card title and make up the bulk of the card content.'
      }
  ]

  constructor() { }

  ngOnInit() {
  }

}
