const STANDARD_ROOM_PRICE_PER_NIGHT = 100;
const JUNIOR_SUITE_PRICE_PER_NIGHT = 120;
const SUITE_PRICE_PER_NIGHT = 150;
const SPA_PRICE = 20;
const ROOM_SIZE_FACTOR = 0.25;
const PARKING_PRICE_PER_NIGHT = 10;
const EURO_SYMB = "<span>&#8364;</span>";

//Data structure to handle a booking
var booking = {
  roomType: "",
  roomSize: "",
  includeSpa: false,
  numNights: 1,
  numParking: 0,
  total: 0,
};

//Handler for all input changes
var handleInputChange = () => {
    updateBooking(booking);
    updateTotal(booking);
    printTotal(booking.total);
};

//Assign event listener to inputs
document
  .getElementById("room-type-selector")
  .addEventListener("change", handleInputChange);
document
  .getElementById("room-spa-check")
  .addEventListener("change", handleInputChange);
document
  .getElementById("room-size-selector")
  .addEventListener("change", handleInputChange);
document
  .getElementById("room-num-nights")
  .addEventListener("change", handleInputChange);
document
  .getElementById("room-num-parking")
  .addEventListener("change", handleInputChange);

//Get current input values
var updateBooking = (booking) => {
  booking.roomType = getRoomType();
  booking.roomSize = getRoomSize();
  booking.includeSpa = isSpaIncluded();
  booking.numNights = getNumNights();
  booking.numParking = getNumParking();
  booking.total = 0;
};

//Update total value considering actual values
var updateTotal = (booking) => {
  booking.total = getPriceForRoom(booking.roomType, booking.total);
  booking.total = addSpaExtra(booking.includeSpa, booking.total);
  booking.total = addRoomSizeFactor(booking.roomSize, booking.total);
  booking.total = booking.total * booking.numNights;
  booking.total = addParkingPrice(booking.numParking, booking.total);
};

//Get input data
var getRoomType = () => document.getElementById("room-type-selector").value;
var getRoomSize = () => document.getElementById("room-size-selector").value;
var isSpaIncluded = () => document.getElementById("room-spa-check").checked;
var getNumNights = () => document.getElementById("room-num-nights").value;
var getNumParking = () => document.getElementById("room-num-parking").value;

var getPriceForRoom = (roomType, total) => {
  switch (roomType) {
    case "standard":
      return (total += STANDARD_ROOM_PRICE_PER_NIGHT);

    case "juniorSuite":
      return (total += JUNIOR_SUITE_PRICE_PER_NIGHT);

    case "suite":
      return (total += SUITE_PRICE_PER_NIGHT);
    default:
      return total;
  }
};

var addSpaExtra = (includeSpa, total) => {
  if (includeSpa) {
    return total + SPA_PRICE;
  } else {
    return total;
  }
};

var addRoomSizeFactor = (roomSize, total) => {
  if (roomSize === "single") {
    return total - total * ROOM_SIZE_FACTOR;
  } else if (roomSize === "triple") {
    return total + total * ROOM_SIZE_FACTOR;
  } else {
    return total;
  }
};

var addParkingPrice = (numParking, total) => {
  return total + numParking * PARKING_PRICE_PER_NIGHT;
};

//Print result
var printTotal = (price) =>
  (document.getElementById("booking-total-cost").innerHTML = price + EURO_SYMB);
