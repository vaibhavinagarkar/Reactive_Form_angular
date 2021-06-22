import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'console';

  info;
constructor(private formBuilder: FormBuilder){
this.info = this.formBuilder.group({
email: '',
password:'',
address:'',
address2:'',
city:'',
state:'',
zip:''
})
}


onSubmit(values= 'any'){
  console.warn("Form Submit", values)
}
  
}
