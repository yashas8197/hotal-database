const { initializeDatabase } = require("./db/db.connect");
const Hotal = require("./models/hotal.models");

initializeDatabase();

const newHotel = {
  name: "Sunset Resort",
  category: "Resort",
  location: "12 Main Road, Anytown",
  rating: 4.0,
  reviews: [],
  website: "https://sunset-example.com",
  phoneNumber: "+1299655890",
  checkInTime: "2:00 PM",
  checkOutTime: "11:00 AM",
  amenities: [
    "Room Service",
    "Horse riding",
    "Boating",
    "Kids Play Area",
    "Bar",
  ],
  priceRange: "$$$$ (61+)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: true,
  isSpaAvailable: true,
  isRestaurantAvailable: true,
  photos: [
    "https://example.com/hotel2-photo1.jpg",
    "https://example.com/hotel2-photo2.jpg",
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

// createData(newHotel);

async function readAllHotals() {
  try {
    const allHotals = await Hotal.find();
    console.log(allHotals);
  } catch (error) {
    throw error;
  }
}
// readAllHotals();

async function getHotalByName(hotalName) {
  try {
    const getHotalName = await Hotal.findOne({ name: hotalName });
    console.log(getHotalName);
  } catch (error) {
    throw error;
  }
}

// getHotalByName("Lake View");

async function getParkingSpaceHotal(isParkingSpace) {
  try {
    const parkingSpaceHotal = await Hotal.find({
      isParkingAvailable: isParkingSpace,
    });
    console.log(parkingSpaceHotal);
  } catch (error) {
    throw error;
  }
}
// getParkingSpaceHotal(true);

async function getRestaurantAvailable(isAvailable) {
  try {
    const restaurantAvailable = await Hotal.find({
      isRestaurantAvailable: isAvailable,
    });
    console.log(restaurantAvailable);
  } catch (error) {
    throw error;
  }
}

// getRestaurantAvailable(true);

async function getRestaurantByCategory(resCategory) {
  try {
    const restaurantByCategory = await Hotal.find({ category: resCategory });
    console.log(restaurantByCategory);
  } catch (error) {
    throw error;
  }
}
// getRestaurantByCategory("Mid-Range");

async function getRestaurantByPrice(resPrice) {
  try {
    const restaurantByPrice = await Hotal.find({ priceRange: resPrice });
    console.log(restaurantByPrice);
  } catch (error) {
    throw error;
  }
}
getRestaurantByPrice("$$$$ (61+)");

async function getRestaurantsByRating(resRating) {
  try {
    const restaurantByRating = await Hotal.find({ rating: resRating });
    console.log(restaurantByRating);
  } catch (error) {
    throw error;
  }
}
// getRestaurantsByRating(4.0);

async function getRestaurantByPhoneNumber(resPhoneNumber) {
  try {
    const restaurantByPhoneNumber = await Hotal.find({
      phoneNumber: resPhoneNumber,
    });
    console.log(restaurantByPhoneNumber);
  } catch (error) {
    throw error;
  }
}
getRestaurantByPhoneNumber("+1299655890");
