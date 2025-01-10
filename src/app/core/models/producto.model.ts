export interface Producto {
    id: string;
    name: string;
    products: Array <{ name:string, stock: number, price: string }>;
    description: string;
    
}