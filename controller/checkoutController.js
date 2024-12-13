import cartModel from "../database/datamodels/cart.js";

async function checkoutController(req, res) {
  const { user } = req.params;
  const cart = await cartModel.find({ user: user }).populate("product");
  res.send(cart);
}

export default checkoutController;
