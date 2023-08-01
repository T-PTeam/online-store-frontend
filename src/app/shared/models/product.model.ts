export class Product{
    constructor(public id: number,
        public name: string,
        public slug: string,
        public description: string,
        public categoryId: number,
        public categoryName: string,
        public price: number,
        public image: any| null){
    }
}