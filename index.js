const { initializeDatabase } = require("./db/db.connect");
const Hotal = require("./models/hotal.models");

initializeDatabase();

const newHotel = {
  name: "New Hotel",
  category: "Mid-Range",
  location: "123 Main Street, Frazer Town",
  rating: 4.0,
  reviews: [],
  website: "https://hotel-example.com",
  phoneNumber: "+1234567890",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  amenities: ["Laundry", "Room Service"],
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: false,
  isSpaAvailable: false,
  isRestaurantAvailable: true,
  photos: [
    "https://example.com/hotel-photo1.jpg",
    "https://example.com/hotel-photo2.jpg",
  ],
};

async function createData(newHotel) {
  try {
    const hotal = new Hotal(newHotel);
    const saveHotal = await hotal.save();
    console.log("New Hotal", saveHotal);
  } catch (error) {
    throw error;
  }
}

createData(newHotel);
