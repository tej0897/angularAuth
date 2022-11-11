import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      empID: '',
      empName:'',
      password:''
    });
  }

  submit(){
    console.log(this.form.getRawValue());
    this.http.post('http://localhost:8080/auth/emp/registerEmp', this.form.getRawValue()).subscribe(
      res => {
        console.log(res);
        });
  }

}
