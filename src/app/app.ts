import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  weight = 0;
  height = 0;
  bmi = 0;
  status: 'empty' | 'ok' | 'error' = 'empty';

  calculate() {
    if(this.height > 0 && this.weight > 0) {
      this.bmi = this.weight / (this.height/100) ** 2;
      this.status = 'ok';
    }
    else {
      this.bmi = 0;
      this.status = 'error';
    }
  }
}
