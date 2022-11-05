export class smartPhone{
    id: number;
    title: string;
    description: string;
    price: number;
    rating: string;
    constructor(id: number, title: string, description: string, price: number, rating: string){
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.rating = rating;
    }
}