import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  // Input
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  // Output
  @Output() select = new EventEmitter();

  // avatar = input.required<string>();
  // name = input.required<string>();

  get imagePath() {
    return `assets/users/${ this.avatar }`;
  };

  onSelectUser() {
    this.select.emit(this.id)
  }


}
