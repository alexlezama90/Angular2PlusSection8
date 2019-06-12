import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'new-course-form-array',
  templateUrl: './new-course-form-array.component.html',
  styleUrls: ['./new-course-form-array.component.css']
})
export class NewCourseFormArrayComponent {
  form = new FormGroup({
    // username: new FormControl(''),
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement){
    // this.form.get('topics') //this returns an abstrac control object
    // (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
    this.topics.push(new FormControl(topic.value));

    topic.value = '';
  }

  removeTopic(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics(){
    return  (this.form.get('topics') as FormArray);
  }

}
