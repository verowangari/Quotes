import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from 'src/app/quote';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  quoted = new Quote(0, "", "", "", "", new Date(), 0, 0);
  @Output() newQuote = new EventEmitter<Quote>();

  addQuote() {
  
    this.newQuote.emit(this.quoted);
    this.quoted = new Quote(0, "", "", "", "", new Date(), 0, 0);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
