import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
	selector: "app-root",
	imports: [RouterOutlet],
	templateUrl: "./app.html",
	styleUrl: "./normalize.css",
})
export class App {
	protected readonly title = signal("discover-angular");
}

export interface TBox {
  id: number;
  title: string;
  icon: string;
  color: string;
  alt: string;
}
