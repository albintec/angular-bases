import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = "midoriya";
  public age: number = 16;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`
  }

  changeName():void {
    this.name = "Bakugou"
  }

  changeAge():void {
    this.age = 29;
  }

  resetForm():void {
    this.name = 'midoriya';
    this.age = 16;
  }
}
