import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ttc',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ttc.component.html',
  styleUrls: ['./ttc.component.css']
})
export class TtcComponent {
  quantity: number = 1;
  price: number = 0;
  tva: number = 18;

  totalBeforeDiscount: number = 0; 
  discount: number = 0;            
  ttc: number = 0;                 
  unitTTC: number = 0;           

  calculateTTC(): void {
    // Prix total avant remise
    this.totalBeforeDiscount = this.price * this.quantity;

    // Appliquer la remise
    let totalAfterDiscount = this.totalBeforeDiscount;
    if (this.quantity > 10 && this.quantity <= 15) {
      totalAfterDiscount *= 0.8;
    } else if (this.quantity > 15) {
      totalAfterDiscount *= 0.7;
    }

   
    this.discount = this.totalBeforeDiscount - totalAfterDiscount;

    
    this.ttc = totalAfterDiscount * (1 + this.tva / 100);

    
    this.unitTTC = this.ttc / this.quantity;
  }
}
