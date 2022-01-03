/*
 * Copyright 2022 by Swiss Post, Information Technology
 */

import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as Atrament from 'atrament/src/atrament';

@Component({
  selector: 'app-atrament',
  templateUrl: './atrament.component.html',
  styleUrls: ['./atrament.component.css']
})
export class AtramentComponent implements OnInit, OnChanges {

  @Input()
  color: string;

  sketchpad: Atrament;

  erasing = false;

  url: string;

  constructor() {
  }

  ngOnInit(): void {
    const canvas = document.querySelector('#sketchpadA');
    console.log(canvas);
    this.sketchpad = new Atrament(canvas, {
      color: this.color,
      smoothing: 0
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.color.currentValue && !changes.color.firstChange) {
      this.sketchpad.color = changes.color.currentValue;
    }

  }

  image() {
    this.url = this.sketchpad.toImage();
  }

  erase() {
    this.erasing = !this.erasing;
    this.sketchpad.mode = this.erasing ? 'erase' : 'draw';
    this.sketchpad.weight = this.erasing ? 20 : 2;
  }

  clear() {
    this.sketchpad.clear();
  }

}
