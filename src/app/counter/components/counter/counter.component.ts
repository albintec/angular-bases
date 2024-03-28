import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <p>
  Counter: {{counter}}
</p>


<button (click)="increaseBy(+2)">+1</button>
<button (click)="decreaseBy(-3)">-1</button>
<button (click)="resetBy()">Reset</button>

  `
})
export class CounterComponent {

  public counter: number = 3;

  increaseBy( value: number):void{
     this.counter += value;
  }

  decreaseBy(value: number):void{
    this.counter += value;
  }

  resetBy():void {
    this.counter = 10;
  }
}
