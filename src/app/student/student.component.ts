import { Component, ViewChild, ElementRef } from '@angular/core';

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
//add student 
add_Student :Students = new Students(0,"","")
addStudent() {
  console.log(this.add_Student.id);
  const newStudent = new Students(this.add_Student.id, this.add_Student.name, this.add_Student.department);
  this.students.push(newStudent);
}
//show student details
studentDetaile : Students = new Students(0,"","");
showDetailes : boolean = false
show_studentDetailes(student:Students){
  this .showDetailes = true
  this.studentDetaile = student
}

//delete student
deleteStudent(student: Students) {
  const index = this.students.indexOf(student);
  if (index !== -1) {
    this.students.splice(index, 1);
  }
}


//edit function 
selectedStudent: Students | null = null; // Nullable type

editStudent(student: Students) {
  this.selectedStudent = student;
}

saveChanges() {
  this.selectedStudent = null; // Reset the selected student after saving changes
}

}
