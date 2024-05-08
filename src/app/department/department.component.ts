import { Component } from '@angular/core';
import { Department } from '../_model/department';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department',
  standalone: true,

  imports: [CommonModule, FormsModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
  department: Department[] = [
    new Department(20, "OS"),
    new Department(21, "Pd"),
    new Department(22, "Ai")
];
//add student 
add_department :Department = new Department(0,"")
addDepartment() {
  console.log(this.add_department.id);
  const newDepartment = new Department(this.add_department.id, this.add_department.name);
  this.department.push(newDepartment);
}
//show student details
departmentDetaile : Department = new Department(0,"");
showDetailes : boolean = false
show_departmentDetailes(department:Department){
  this .showDetailes = true
  this.departmentDetaile = department
}

//delete student
deletedepartment(department: Department) {
  const index = this.department.indexOf(department);
  if (index !== -1) {
    this.department.splice(index, 1);
  }
}

//edit function 
selecteddepartment: Department | null = null; // Nullable type

editdepartment(department: Department) {
  this.selecteddepartment = department;
}

saveChanges() {
  this.selecteddepartment = null; // Reset the selected student after saving changes
}

}



