import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-example',
  imports: [],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {
  user: User = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com'
  }
}
