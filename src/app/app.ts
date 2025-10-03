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
