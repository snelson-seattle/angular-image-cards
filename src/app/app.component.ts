import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/images/tree.jpeg',
      username: 'nature',
      content: 'Saw this tree during my hike today.',
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/images/mountain.jpeg',
      username: 'mountainlover',
      content: 'A great pic of a snowy mountain.',
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/images/biking.jpeg',
      username: 'biker2112',
      content: 'I did some mountain biking today.',
    },
  ];
}
