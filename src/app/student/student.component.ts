import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  title = "Students data"
  constructor() { }

  ngOnInit(): void {
  }

  public add(a:number,b:number):Number{
    return a+b;
  }
  public sub(a:number,b:number):Number{
    return a-b;
  }
  public mul(a:number,b:number):Number{
    return a*b;
  }
  public div(a:number,b:number):Number{
    return a/b;
  }
}


