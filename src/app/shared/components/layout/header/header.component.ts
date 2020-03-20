import { Component, OnInit } from '@angular/core';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'mc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logo = faCalculator;
  title = 'Macro Calculator';

  constructor() { }

  ngOnInit(): void {
  }

}
