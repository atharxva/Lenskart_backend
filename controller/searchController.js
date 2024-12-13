import productModel from "../database/datamodels/products.js";

async function searchbar(req, res) {
  try {
    const products = await productModel.find({});
    const plainProducts = products.map((product) => product.toObject());
    res.status(200).json(plainProducts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Couldnt fetch Data" });
  }
}
export default searchbar;

