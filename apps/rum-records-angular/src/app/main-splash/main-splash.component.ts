import { Component, OnInit } from '@angular/core';

import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'rum-record-store-main-splash',
  standalone: true,
  imports: [ SearchBarComponent ],
  templateUrl: './main-splash.component.html',
  styleUrls: ['./main-splash.component.sass'],
})
export class MainSplashComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
