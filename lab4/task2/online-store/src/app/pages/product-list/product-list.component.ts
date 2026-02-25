import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { PRODUCTS } from '../../data/products.data';
import {
  ProductCardComponent,
  ShareChannel,
  ShareEvent,
} from '../../components/product-card/product-card';

type SortOption = 'default' | 'price-asc' | 'price-desc';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  readonly allProducts: Product[] = PRODUCTS;
  products: Product[] = [...PRODUCTS];

  selectedSort: SortOption = 'default';
  lastShareMessage = '';

  onShare(event: ShareEvent): void {
    const shareUrl = this.buildShareUrl(event.channel, event.product);

    if (typeof window !== 'undefined') {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }

    this.lastShareMessage = `${
      event.channel === 'whatsapp' ? 'WhatsApp' : 'Telegram'
    } share opened: ${event.product.name}`;
  }

  onSortChange(value: string): void {
    this.selectedSort = value as SortOption;
    this.applySort();
  }

  private applySort(): void {
    const list = [...this.allProducts];

    switch (this.selectedSort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    this.products = list;
  }

  private buildShareUrl(channel: ShareChannel, product: Product): string {
    const encodedLink = encodeURIComponent(product.link);
    const encodedName = encodeURIComponent(product.name);

    if (channel === 'whatsapp') {
      const message = encodeURIComponent(
        `Check out this product: ${product.link}`
      );
      return `https://wa.me/?text=${message}`;
    }

    return `https://t.me/share/url?url=${encodedLink}&text=${encodedName}`;
  }
}