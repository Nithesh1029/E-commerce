import Cart from "../model/cartModel.js";
import Product from "../model/productModel.js";

export const addToCart = async (req, res) => {
  try {
    const userId = req.userId;
    const { productId } = req.body;

    
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      
      cart = new Cart({
        user: userId,
        items: [{ product: productId, quantity: 1 }]
      });
    } else {
      
      const itemIndex = cart.items.findIndex(
        item => item.product.toString() === productId
      );

      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += 1;
      } else {
        cart.items.push({
          product: productId,
          quantity: 1
        });
      }
    }

    await cart.save();

    return res.status(200).json({
      success: true,
      message: "Added to cart",
      data: cart
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};