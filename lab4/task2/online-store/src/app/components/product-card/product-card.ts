import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
  signal,
} from '@angular/core';
import { Product } from '../../models/product.model';

export type ShareChannel = 'whatsapp' | 'telegram';

export interface ShareEvent {
  product: Product;
  channel: ShareChannel;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  product = input.required<Product>();
  shareClicked = output<ShareEvent>();

  private selectedImageIndex = signal(0);

  currentImage = computed(() => {
    const p = this.product();
    const images = p.images?.length ? p.images : [p.image];
    const i = this.selectedImageIndex();
    return images[i] ?? images[0] ?? p.image;
  });

  selectImage(index: number): void {
    this.selectedImageIndex.set(index);
  }


  prevImage(): void {
    const images = this.product().images;
    if (!images?.length) return;
    const current = this.selectedImageIndex();
    const next = (current - 1 + images.length) % images.length;
    this.selectedImageIndex.set(next);
  }

  nextImage(): void {
    const images = this.product().images;
    if (!images?.length) return;
    const current = this.selectedImageIndex();
    const next = (current + 1) % images.length;
    this.selectedImageIndex.set(next);
  }

  requestShare(channel: ShareChannel): void {
    this.shareClicked.emit({
      product: this.product(),
      channel,
    });
  }

  formatPrice(value: number): string {
    return new Intl.NumberFormat('kk-KZ').format(value);
  }

  starText(rating: number): string {
    const rounded = Math.max(1, Math.min(5, Math.round(rating)));
    return '★'.repeat(rounded) + '☆'.repeat(5 - rounded);
  }
}