import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rum-record-store-news-list',
  standalone: true,
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.sass'],
})
export class NewsListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
      throw new Error ('Unable to get news stories');
  }

  onSubscribeClick() {
    alert('Thank you for subscribing!');
  }
}
