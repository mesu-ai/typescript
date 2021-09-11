class car {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;

    }

    getCarPrice(tax: number): number {
        const totalTax = this.price * tax / 100;
        const totalPrice = this.price + totalTax;
        return totalPrice;
    }
}

const carInfo = new car('toyota', 2000000);
const price = carInfo.getCarPrice(15);
console.log('car price: ', price);
