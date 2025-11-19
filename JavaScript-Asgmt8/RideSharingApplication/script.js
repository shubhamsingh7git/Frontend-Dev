class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle;
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (this.distance === undefined || this.distance < 0) {
      throw new Error("Invalid trip distance");
    }
    return this.distance * 12;
  }
}

const user = new User("Shubham", 4.6);
const driver = new Driver("Saul", 4.9, "Swift Desire");
const trip = new Trip("Mumbai", "Pune", 150);

try {
  console.log("Fare:", trip.calculateFare());
} catch (e) {
  console.log("Error:", e.message);
}

const badTrip = new Trip("Delhi", "Gurgaon", -5);

try {
  console.log("Fare:", badTrip.calculateFare());
} catch (e) {
  console.log("Error:", e.message);
}
