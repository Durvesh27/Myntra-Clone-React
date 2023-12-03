import jwt from "jsonwebtoken";
import UserModal from "../Modals/User.Modal.js";
import ProductModal from "../Modals/Product.Modal.js";

export const addCart = async (req, res) => {
  try {
    const { token, productId } = req.body;
    if (!token || !productId) throw new Error("Token & Product Id is required");
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedData?.userId;
    const user = await UserModal.findById({ _id: userId });
    user?.cart.push(productId);
    await user.save();
    return res.status(200).json({ success: true, user: user });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};

export const getCartProducts = async (req, res) => {
  try {
    const { token } = req.body;
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedData?.userId;
    const user = await UserModal.findById({ _id: userId });
    if (user) {
      let finalData = [];
      for (let i = 0; i < user.cart.length; i++) {
        const products = await ProductModal.findById(user.cart[i]);
        if (products) {
          finalData.push(products);
        }
      }
      return res.status(200).json({ success: true, products: finalData });
    }
    throw new Error("User not found");
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};

export const addWishlist = async (req, res) => {
  try {
    const { token, productId } = req.body;
    if (!token || !productId) throw new Error("Token & Product Id is required");
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedData?.userId;
    const user = await UserModal.findById({ _id: userId });
    user?.wishlist.push(productId);
    await user.save();
    return res.status(200).json({ success: true, user: user });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message});
  }
};

export const getWishlistProducts = async (req, res) => {
  try {
    const { token } = req.body;
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedData?.userId;
    const user = await UserModal.findById({ _id: userId });
    if (user) {
      let finalData = [];
      for (let i = 0; i < user.wishlist.length; i++) {
        const products = await ProductModal.findById(user.wishlist[i]);
        if (products) {
          finalData.push(products);
        }
      }
      return res.status(200).json({ success: true, products: finalData });
    }
    throw new Error("User not found");
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};

export const deleteCartProduct = async (req, res) => {
  try {
    const { productId, token } = req.body;
    if (!productId || !token)
      throw new Error("Product Id  & token is required");
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedData?.userId;
    const user = await UserModal.findById({ _id: userId });
    const cart = user.cart;
    const removeItem = cart.indexOf(productId);
    cart.splice(removeItem, 1);
    await user.save();
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ success: false, message: error });
  }
};
export const deleteWishlistProduct = async (req, res) => {
  try {
    const { productId, token } = req.body;
    if (!productId || !token)
      throw new Error("Product Id  & token is required");
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedData?.userId;
    const user = await UserModal.findById({ _id: userId });
    const wish = user.wishlist;
    const removeItem = wish.indexOf(productId);
    wish.splice(removeItem, 1);
    await user.save();
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ success: false, message: error });
  }
};

export const clearCart = async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) throw new Error("token is required");
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedData?.userId;
    const user = await UserModal.findById({ _id: userId });
    user.cart = [];
    await user.save();
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const MoveToCart = async (req, res) => {
  try {
    const { productId, token } = req.body;
    if (!token || !productId)
      throw new Error("Product Id or token is required");
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedData?.userId;
    const user = await UserModal.findById({ _id: userId });
    const workIndex = user.wishlist.indexOf(productId);
    user.wishlist.splice(workIndex, 1);
    user.cart.push(productId);
    await user.save();
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
