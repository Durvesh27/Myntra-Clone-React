import ProductModal from "../Modals/Product.Modal.js";
import UserModal from "../Modals/User.Modal.js";

export const getAllBuyers = async (req, res) => {
  try {
    const user = await UserModal.find({ role: "Buyer" });
    if (user) return res.status(200).json({ status: true, user: user });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};

export const getAllSellers = async (req, res) => {
  try {
    const user = await UserModal.find({ role: "Seller" });
    if (user) return res.status(200).json({ status: true, user: user });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const user = await ProductModal.find({});
    if (user) return res.status(200).json({ status: true, user: user });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};

export const blockUser = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) throw new Error("User Id is required");
    const user = await UserModal.findByIdAndUpdate(
      userId,
      { isBlocked: true },
      { new: true }
    );
    if (user)
      return res
        .status(200)
        .json({
          status: true,
          message: "User Blocked Successfully",
          user: user,
        });
    throw new Error("Internal Error");
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};

export const unBlockUser = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) throw new Error("User Id is required");
    const user = await UserModal.findByIdAndUpdate(
      userId,
      { isBlocked: false },
      { new: true }
    );
    if (user)
      return res
        .status(200)
        .json({
          status: true,
          message: "User Blocked Successfully",
          user: user,
        });
    throw new Error("Internal Error");
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};

export const blockProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    if (!productId) throw new Error("productId is required");
    const product = await ProductModal.findByIdAndUpdate(
      productId,
      { isBlocked: true },
      { new: true }
    );
    if (product)
      return res
        .status(200)
        .json({
          status: true,
          message: "product Blocked Successfully",
          product: product,
        });
    throw new Error("Internal Error");
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};

export const unBlockProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    if (!productId) throw new Error("productId is required");
    const product = await ProductModal.findByIdAndUpdate(
      productId,
      { isBlocked: false },
      { new: true }
    );
    if (product)
      return res
        .status(200)
        .json({
          status: true,
          message: "product Unblocked Successfully",
          product: product,
        });
    throw new Error("Internal Error");
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};

export const verifyProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    if (!productId) throw new Error("productId is required");
    const product = await ProductModal.findByIdAndUpdate(
      productId,
      { isVerified: true },
      { new: true }
    );
    if (product)
      return res
        .status(200)
        .json({
          status: true,
          message: "product Verified Successfully",
          product: product,
        });
    throw new Error("Internal Error");
  } catch (error) {
    return res.status(500).json({ status: "error", message: error });
  }
};
// export const unVerifyProduct=async(req,res)=>{
//     try{
//         const{productId}=req.body
//         if (!productId) throw new Error("productId is required");
//         const product = await ProductModal.findByIdAndUpdate(productId,{isVerified:true},{new:true});
//         if(product) return res.status(200).json({status:true,"message":"product Verified Successfully",product:product})
//         throw new Error("Internal Error")
//     }
//     catch(error){
//     return res.status(500).json({status:"error",message:error})
//     }
// }
