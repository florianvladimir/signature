/*
 * Copyright 2022 by Swiss Post, Information Technology
 */

import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import Sketchpad from 'responsive-sketchpad';

@Component({
  selector: 'app-responsive-s',
  templateUrl: './responsive-s.component.html',
  styleUrls: ['./responsive-s.component.css']
})
export class ResponsiveSComponent implements OnInit, OnChanges {

  @Input()
  color: string;

  pad: Sketchpad;

  url: string;

  constructor() {
  }

  ngOnInit(): void {
    this.pad = new Sketchpad(document.getElementById('sketchpadR'), {
      line: {
        color: this.color,
        size: 5,
      },
      height: 600
    });
    this.pad.setLineColor(this.color);
    const width = this.pad.getCanvasSize().width;
    const height = (width / 4) * 3;
    this.pad.setCanvasSize(width, height);
    // this.pad.setCanvasSize()
  }

  resizeImage(url, width, height) {

    // Create a canvas with the desired dimensions
    const canvas1 = document.createElement("canvas");
    canvas1.width = width;
    canvas1.height = height;

    // Scale and draw the source image to the canvas
    canvas1.getContext("2d").drawImage(url, 0, 0, width, height);

    // Convert the canvas to a data URL in PNG format
    return canvas1.toDataURL();

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.color.currentValue && !changes.color.firstChange) {
      this.pad.setLineColor(changes.color.currentValue);
    }

  }

  fertig() {
    this.url = this.resizeImage(this.pad.canvas, 400, 300);
  }

  clear() {
    this.pad.clear();
  }

  undo() {
    this.pad.undo();
  }

}
