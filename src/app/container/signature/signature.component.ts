import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent implements OnInit {

  type: number = 1;

  color = '#ffcc00';

  constructor() { }

  ngOnInit(): void {
  }

}
