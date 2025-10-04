import { Component, Input } from '@angular/core';
import type { TBox } from '../app';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './box.html',
  styleUrl: './box.css'
})
export class Box {
  @Input() box!: TBox;
}
