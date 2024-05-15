import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'rum-record-store-search-bar',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass'],
})
export class SearchBarComponent implements OnInit {

  public terms: string;
  faSearch = faSearch;

  constructor(private _router: Router, private route: ActivatedRoute) {
    this.terms = '';
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.terms = params['terms'];
    })
  }

  public searchRecords() {
    this._router.navigateByUrl(`/records?terms=${this.terms?.toLowerCase()}`)
    return;
  }
}
