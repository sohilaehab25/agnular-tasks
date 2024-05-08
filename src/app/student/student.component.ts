import { Component, Input } from '@angular/core';
import { Students } from '../_model/students';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  standalone:true,
  imports:[FormsModule, CommonModule],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  students: Students[] = [
    new Students(20, "Sohila", "OS"),
    new Students(21, "nade", "Pd"),
    new Students(22, "manna", "Ai")
];

}

