class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

MovieTicket.prototype.printTicket = function () {
  return (
    "Movie: " +
    this.movieName +
    ", Seat: " +
    this.seatNo +
    ", Price: " +
    this.price
  );
};

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

const t1 = new OnlineTicket("Inception", "A12", 250, 30);
const t2 = new OnlineTicket("Avatar 2", "B7", 300, 40);

console.log(t1.printTicket(), "Total:", t1.getTotalAmount());
console.log(t2.printTicket(), "Total:", t2.getTotalAmount());
