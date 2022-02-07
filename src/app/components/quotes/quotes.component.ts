import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
title='Add a Quote';
quotes:Quote[]=[
  new Quote (1,'Amal','Daily Hack','When things go wrong, do not go with them','Elbert Hubbard', new Date(2022,2,2),0,0),
    new Quote (2,'Amanda','Daily Hack','Miracles happen to those who believe in them.','Bernhard Berenson',new Date(2021,2,10),0,0),
    new Quote (3,'Grace','Daily Hack','One small positive thought can change your whole day.','Zig Ziglar',new Date(2022,2,8),0,0),
    new Quote (4,'Andrew','Daily Hack','Write it on your heart that every day is the best day in the year.','Ralph Waldo Emerson',new Date(2022,2,4),0,0),
    new Quote (5,'Michael','Daily Hack','The purpose of our lives is to be happy..','Dalai Lama',new Date(2022,1,1),0,0)
]
  constructor() { }

  ngOnInit(): void {
  }

}
