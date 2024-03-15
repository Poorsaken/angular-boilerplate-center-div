import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { DesignComponent } from './design/design.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TodoComponent,DesignComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-test';
}
