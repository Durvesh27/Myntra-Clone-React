import ProductModal from "../Modals/Product.Modal.js";
import jwt from "jsonwebtoken";
export const addProduct = async (req, res) => {
  try {
    const { pri, sec, category, imgsrc, discount,price1,price2 } = req.body.addPro
    const {token}=req.body
    if (!pri || !sec || !imgsrc || !price1 || !price2 || !discount || !category) {
      return res
        .status(404)
        .json({ success:false, message: "All Fields Mandatory" });
    }
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedData) {
      return res
        .status(404)
        .json({ success:false, message: "Token not valid" });
    }
    const userId = decodedData?.userId;
    const product = new ProductModal({
      pri,
      sec,
      imgsrc,
      category,
      discount,
      price1,
      price2,
      userId: userId,
    });
    await product.save();

    return res.status(200).json({ success:true,productData:product });
  } catch (error) {
    res.status(500).json({success:false, message: error });
  }
};

export const allProducts = async (req, res) => {
  try {
    const products = await ProductModal.find({
      isBlocked: false,
      isVerified: false,
    });
    if (products.length) {
      return res.status(200).json({ success:true, products: products });
    }
    return res
      .status(404)
      .json({ success:false, message: "No Products found" });
  } catch (error) {
    return res.status(500).json({ success:false, message: error });
  }
};



export const getYourProduct = async (req, res) => {
  try {
    const { token } = req.body;
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedData) {
      return res
        .status(404)
        .json({ status: "error", message: "Token not valid" });
    }
    const userId = decodedData?.userId;
    const yourProducts = await ProductModal.find({ userId: userId });
    if (yourProducts.length) {
      return res
        .status(200)
        .json({ status: "success", products: yourProducts });
    }
    return res
      .status(404)
      .json({ status: "error", message: "No Products found" });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};

export const SingleProduct = async (req, res) => {
  try {
      const { userId } = req.body;
      if (!userId) return res.status(404).json({ success: false, message: "Product id is mandtory.." })

      const product = await ProductModal.findById(userId);
      if (product) {
          return res.status(200).json({ success: true, productData:product })
      }
      return res.status(404).json({ success: false, error: "Products details not found." })

  } catch (error) {
      return res.status(500).json({ success: false, error: error.message })
  }
}

export const updateYourProduct = async (req, res) => {
  try {
    const { productId, name, price, category, image, token } = req.body;
    if (!token)
      return res
        .status(404)
        .json({ status: "error", message: "Token is required" });
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedData) {
      return res
        .status(404)
        .json({ status: "error", message: "Token not valid" });
    }
    const userId = decodedData?.userId;

    const updatedProduct = await ProductModal.findOneAndUpdate(
      { _id: productId, userId: userId },
      { name, price, category, image },
      { new: true }
    );
    if (updatedProduct) {
      return res
        .status(200)
        .json({ status: "Sucess", product: updatedProduct });
    }
    return res.status(404).json({
      status: "error",
      message: "You are trying to update product which is not yours..",
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};

export const deleteYourProduct = async (req, res) => {
  try {
    const { productId, token } = req.body;
    if (!productId)
      return res
        .status(404)
        .json({ status: "error", message: "Product Id is required" });
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedData?.userId;
    const isDeleted = await ProductModal.findByIdAndDelete({
      _id: productId,
      userId: userId,
    });
    if (isDeleted)
      return res
        .status(200)
        .json({ status: true, message: "Product deleted Successfully" });
    throw new Error("MongoDb Error");
  } catch (error) {
    return res.status(500).json({ status: "error", error: error.message });
  }
};

export const addRating = async (req, res) => {
  try {
    const { productId, rating } = req.body;
    const updatedProductRating = await ProductModal.findByIdAndUpdate(
      productId,
      { $push: { ratings: rating } },
      { new: true }
    );
    if (updatedProductRating)
      return res
        .status(200)
        .json({ success: true, product: updatedProductRating });
    throw new Error("Mongo Error");
  } catch (error) {
    return res.status(500).json({ status: "error", error: error.message });
  }
};

export const addComments = async (req, res) => {
  try {
    const { productId, name, comment } = req.body;
    const updatedComments = await ProductModal.findByIdAndUpdate(
      productId,
      { $push: { comments: { name: name, comments: comment } } },
      { new: true }
    );

    if (updatedComments)
      return res.status(200).json({ status: true, product: updatedComments });
  } catch (error) {
    return res.status(500).json({ status: "error", error: error.message });
  }
};
