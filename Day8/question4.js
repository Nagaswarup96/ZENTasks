// write a class to calculate uber price.

console.log("\n\n\n************Question4***************\n\n\n");

class uber {
  constructor(kms, time) {
    this.baseFare = 100;
    this.farePerKm = 10;
    this.farePerMin = 2;
    this.kms = kms;
    this.time = time;
  }

  getPrice() {
    const price =
      this.baseFare + this.kms * this.farePerKm + this.time * this.farePerMin;
    return `
    BaseFare            : ${this.baseFare}
    Fare/Km             : ${this.farePerKm}
    Distance Travelled  : ${this.kms}
    Fare/min            : ${this.farePerMin}
    Total Time          : ${this.time}
    ------------------------------
    Total Fare          : ${price}
      `;
  }
}

const customer1 = new uber(5, 45);
const customer2 = new uber(4, 30);

console.log(customer1.getPrice());
console.log(customer2.getPrice());
