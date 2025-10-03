import { Component } from '@angular/core';
import type { TBox } from '../app';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './box.html',
  styleUrl: './box.css'
})

export class BoxComponent {
  box: TBox = {
    id: 1,
    title: 'docker',
    icon: 'docker.png',
    color: 'orange',
    alt: 'docker icon'
  };
}
