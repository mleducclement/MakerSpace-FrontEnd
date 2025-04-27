import {Category} from "@/entities/category.ts";

interface IProduct {
  id: string;
  sku: string;
  name: string;
  description: string;
  category: Category;
  price: number;
  imageUri: string;
  rating: number;
  promoRate: number;
  stock: number;
}

export class Product implements IProduct {
  id: string;
  sku: string;
  name: string;
  description: string;
  category: Category;
  price: number;
  imageUri: string;
  rating: number;
  promoRate: number;
  stock: number;

  constructor(data: Partial<IProduct> = {}) {
    this.id = data.id ?? "";
    this.sku = data.sku ?? "";
    this.name = data.name ?? "";
    this.description = data.description ?? "";
    this.category = data.category ? new Category(data.category) : Category.empty();
    this.price = data.price ?? 0;
    this.imageUri = data.imageUri ?? "";
    this.rating = data.rating ?? 0;
    this.promoRate = data.promoRate ?? 0;
    this.stock = data.stock ?? 0;
  }
}