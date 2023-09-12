//Send food products to databsase

const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  price: String,
  description: String,
  count: Number,
  src: String,
});

const lunch = mongoose.model("lunch", productSchema);
const breakfast = mongoose.model("breakfast", productSchema);

//Connect to mongoDB
async function connectDb() {
  await mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err) => console.log(err.message));
}

// //Send products to mongoDB
// async function productSend() {

//   //Array of breakfast foods to add to database
//   // const BreakfastArray = [
//   //   {
//   //     name: "Mexican Taco",
//   //     price: "$2.99",
//   //     description:
//   //       "Indulge in a tantalizing symphony of flavors with our sizzling Mexican Taco.",
//   //     count: 0,
//   //     src: "Images/Tacos.jpg",
//   //   },
//   //   {
//   //     name: "Chicken Sandwich",
//   //     price: "$5.99",
//   //     description:
//   //       "Tender, succulent chicken breast, marinated in a blend of buttermilk and spices, is lovingly coated in a golden, crunchy breading.",
//   //     count: 1,
//   //     src: "Images/Sandwich.jpg",
//   //   },
//   //   {
//   //     name: "Donuts & Coffee",
//   //     price: "$3.99",
//   //     description:
//   //       "Welcome to a world of irresistible indulgence where our exquisite donuts and artisanal coffee come together to create a perfect harmony of flavors.",
//   //     count: 2,
//   //     src: "Images/Coffee&Donuts.jpg",
//   //   },
//   //   {
//   //     name: "Eggs & Toast",
//   //     price: "$4.99",
//   //     description:
//   //       "Experience breakfast bliss with our elegant French toast ensemble and perfectly fried eggs – a symphony of flavors that will enchant your morning palate.",
//   //     count: 3,
//   //     src: "Images/Egg.jpg",
//   //   },
//   // ];

//   // //Array of lunch foods to add in database
//   // const LunchArray = [
//   //   {
//   //     name: "Italian Pizza",
//   //     price: "$12.99",
//   //     description:
//   //       "A pizza with simple flavors and a supple, thin crust, that's cooked in a very hot oven. Flavored with the most supreme toppings.",
//   //     count: 0,
//   //     src: "Images/Pizza.jpg",
//   //   },
//   //   {
//   //     name: "Cheese Burger",
//   //     price: "$7.99",
//   //     description:
//   //       "A medium sized cheese burger with two slices of cheeze, a large chicken patty and some tomatoes. Comes with a medium-sized packet of french fries.",
//   //     count: 1,
//   //     src: "Images/Burger.jpg",
//   //   },
//   //   {
//   //     name: "Beef Steak",
//   //     price: "$15.99",
//   //     description:
//   //       "A tender, flavorful, medium-rare steak that isn't overly salty. Cooked to perfection and seasoned perfectly. A favorite among our frequent customers!",
//   //     count: 2,
//   //     src: "Images/Steak.jpg",
//   //   },
//   //   {
//   //     name: "Fish & Chips",
//   //     price: "$8.99",
//   //     count: 3,
//   //     description:
//   //       "Fried fish that comes good ol' french fries. Also comes with our original sauce to give your meal the perfect taste.",
//   //     src: "Images/Fish.jpg",
//   //   },
//   // ];

//   //Adding breakfast to database
//   for (let i = 0; i < BreakfastArray.length; i++) {
//     let currentFood = new breakfast(BreakfastArray[i]);
//     await currentFood
//       .save()
//       .then((savedFood) => {
//         console.log("Data saved to MongoDB:", savedFood);
//       })
//       .catch((error) => {
//         console.error("Error saving data:", error);
//       });
//   }

//   //Adding lunch to database
//   for (let i = 0; i < LunchArray.length; i++) {
//     let currentFood = new lunch(LunchArray[i]);
//     await currentFood
//       .save()
//       .then((savedFood) => {
//         console.log("Data saved to MongoDB:", savedFood);
//       })
//       .catch((error) => {
//         console.error("Error saving data:", error);
//       });
//   }
// }

module.exports = {
  connectDb,
  productSend,
  lunch,
  breakfast,
};
