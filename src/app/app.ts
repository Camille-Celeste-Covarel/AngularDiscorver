import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Box } from "./box/box";
import { DataBox } from './data/data';

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, Box],
	templateUrl: "./app.html",
	styleUrl: "../styles.css",
})
export class App {
	protected readonly title = signal("discover-angular");
  protected readonly DataBox = DataBox;
  protected readonly BoxD = BoxD;
}

const BoxD = [...DataBox].sort((a, b) => a.id - b.id);

export interface TBox {
  id: number;
  title: string;
  icon: string;
  color: string;
  alt: string;
}
