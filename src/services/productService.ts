import {Product} from "@/entities/product.ts";
import APIClient from "@/services/apiClient.ts";

export default new APIClient<Product>("products")