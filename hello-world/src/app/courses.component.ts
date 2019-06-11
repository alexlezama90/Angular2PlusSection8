import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',

    // template: `
    //     <h2 [textContent]="title"></h2>
    //     <img src="{{ imageUrl }}"/>
    // // `
    // template: `
    //         <h2>{{ title }}</h2>
    //         <img [src]="imageUrl"/>
    //         <table>
    //             <tr>
    //                 <td [attr.colspan]="colSpan"></td>
    //             </tr>
    //         </table>
    // `
    // template:`
    //         <button class="btn btn-primary" [class.active] ="isActive" >Save</button>
    // `
    // template:`
    //         <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
    // `
    // template:`
    //     <button (click)="onSave()">Save</button>
    // `
    // template:`
    //     <button (click)="onSave($event)">Save</button>
    // `
    // template:`
    //     <div (click)="onDivClicked()">
    //         <button (click)="onSave($event)">Save</button>
    //     </div>
    //     `
    // template:`
    //     <input (keyup)="onKeyUp($event)" />
    //     `
    // template: `
    //     <input (keyup.enter)="onKeyUp()" />
    //     `
    // template: `
    //     <input (keyup.enter)="onKeyUp($event)" />
    //     `
    // template: `
    // <input #email (keyup.enter)="onKeyUp(email)" />
    // `
    // template: `
    // <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" />
    //  <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    // // `
    // template: `
    // <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    // `
    // template: `
    // {{course.title | uppercase | lowercase}}<br/>
    // {{course.students | number }}<br/>
    // {{course.rating | number:'1.2-2'}}<br/>
    // {{course.price | currency:"AUD":true:'3.2-2'}}<br/>
    // {{course.releaseDate | date:'short'}}<br/>
    // `
    // template:`
    //     {{text | summary:15}}
    // `
    template:`
        <span class="glyphicon glyphicon-star"></span>
    `


})

export class CoursesComponent {
    // title = 'List of courses';
    // imageUrl = "http://lorempixel.com/400/200";
    // colSpan = 2;
    // isActive = false; 

    //onSave(){
    // onSave($event){
    //     $event.stopPropagation();
    //     console.log("Button was clicked", $event);
    // }
    // onDivClicked(){
    //     console.log("Div was clicked");
    // }
    // onKeyUp($event) {
    //     if ($event.keyCode === 13) console.log("ENTER was pressed");
    // }
    // onKeyUp() {
    //     console.log("ENTER was pressed");
    // }
    // onKeyUp($event) {
    //     console.log($event.target.value);
    // }
    // onKeyUp(email) {
    //     console.log(email.value);
    // }
    // email = "default@example.com";
    // onKeyUp() {
    //     console.log(this.email);
    // }
    // course={
    //     title: "The Complete Angular Course",
    //     rating: 4.9745,
    //     students: 30123,
    //     price: 190.95,
    //     releaseDate: new Date(2016, 3, 1)
    // }

    // text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    isFavorite = false;

    makeFavorite(){
        this.isFavorite ? this.isFavorite = false : this.isFavorite = true;
    }


}