import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
title='Add a Quote';
quotes:Quote[]=[
  new Quote (1,'Kulei','Day','You always pass failure on the way to to success.','Mickey Rooney', new Date(2021,7,12),0,0),
    new Quote (2,'Brian','Technology…','Technology… the knack of so arranging  that we don’t have to experience it.','Max Frisch',new Date(2021,7,10),0,0),
    new Quote (3,'Mikey','The great myth','The great myth of our times is that technology is communication.','Libby Larsen',new Date(2021,7,8),0,0),
    new Quote (4,'Beatrice','Hater','People will always have their opinion on you despite who you are and what your capable of.','Ana Chable',new Date(2021,7,7),0,0),
    new Quote (4,'Kelvin','Life','The purpose of our lives is to be happy..','Dalai Lama',new Date(2021,7,7),0,0)
]
  constructor() { }

  ngOnInit(): void {
  }

}
