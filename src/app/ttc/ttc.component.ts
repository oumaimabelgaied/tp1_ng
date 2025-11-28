import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-ttc',
  standalone: true,
  templateUrl: './ttc.component.html',
  styleUrls: ['./ttc.component.css']
})
export class TtcComponent {
  price = signal(0);
  quantity = signal(1);
  tva = signal(18);

  totalBeforeDiscount = computed(() => this.price() * this.quantity());

  
  discountHT= computed(() => {
    const q = this.quantity();
    const total=this.totalBeforeDiscount()
    if (q > 10 && q <= 15) return total * 0.20;
    if (q > 15) return total* 0.30;
    return 0;
  });

   // prix unitaire TTC avant remise (prix * (1 + tva))
  unitTTCBefore = computed(() => this.price() * (1 + this.tva() / 100));


  // remise  TTC
  discountTTC = computed(() => this.discountHT() * (1 + this.tva() / 100));


  // total TTC après remise
  ttc = computed(() => (this.totalBeforeDiscount() - this.discountHT()) * (1 + this.tva() / 100));

 
}
