import express from "express";
import connect from "./database/connection.js";
import cors from "cors";
import productRouter from "./Routes/productRoute.js";
import addToCartRouter from "./Routes/CartRoute.js";
import getAuthRoute from "./Routes/getAuthRoute.js";
import checkoutRoute from "./Routes/checkoutRoute.js";
import searchbarRoute from "./Routes/searchbarRoute.js";
import displayCart from "./Routes/displayCartRoute.js";
import profileRoute from "./Routes/profileRoute.js";
import addressInputRoute from "./Routes/addressInputRoute.js";

connect();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/products", productRouter);
app.use("/addtocart", addToCartRouter);
app.use("/", getAuthRoute);
app.use("/search", searchbarRoute);
app.use("/cart", displayCart);
app.use("/profile", profileRoute);
app.use("/checkout", checkoutRoute);
app.use("/address", addressInputRoute);

app.listen(8000, () => {
  console.log("Server listening at port 8000");
});
