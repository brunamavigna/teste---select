import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'select';

  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  
 constructor(){}

  // changes(event: any){
  //   console.log(event)
  // }
  ngOnInit():void{
    this.toppings = new FormControl({
      
    })
    
  //   const newLocal = this.toppings.get('select').valueChanges.subscribe((x: any)  => {
  //   console.log(x); 
  // })

  this.toppings.valueChanges.subscribe((value) => {
    console.log(value ,'jfkf');
  })

  }

  


  changes2(event: any){
    console.log(event)
    
    
    
  }

   
}
