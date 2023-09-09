import UserModal from "../Modals/User.Modal.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const Register = async (req, res) => {
  try {
    const { userData } = req.body;
    const { name, email, password, role } = userData;
    if (!name || !email || !password || !role){
      return res.send({ success: false, message: "All Fields are mandatory" });
    }
    const isEmailExist = await UserModal.find({ email: email });
    if (isEmailExist.length) {
      return res.json({ success: false, message: "Email ID already exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModal({ name, email, password: hashedPassword, role });
    await user.save();
    return res.json({ success: true, message: "Registration Successfull" });
  } catch (err) {
    res.json({ status: "error", message: err });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body.userData;
    if (!email || !password)
      return res.json({ success: false, message: "Fill all Fields" });
    const user = await UserModal.findOne({ email });
    if (!user) return res.json({ success: false, message: "User not Found" });

    if (user.isBlocked)
      return res.json({
        success: false,
        message: "You are blocked report to Admin",
      });

    const isPasswordRight = await bcrypt.compare(password, user.password);
    if (isPasswordRight) {
      const userObject = {
        name: user.name,
        email: user.email,
        role:user.role,
        _id: user._id,
      };
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
      return res.json({
        success: true,
        message: "Login Successfull",
        user: userObject,
        token: token,
      });
    }
    return res.json({ success: false, message: "Password is wrong" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getCurrentUser = async (req, res) => {
  try {
    const { token } = req.body;
    if (!token)
      return res
        .status(404)
        .json({ status: "error", message: "Token is required" });
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedData) {
      return res
        .status(404)
        .json({ success: false, message: "Not a valid token" });
    }
    const userId = decodedData?.userId;
    const user = await UserModal.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const userObject = {
      name: user?.name,
      email: user?.email,
      role:user?.role,
      _id: user?._id,
    };
    return res.status(200).json({ success: true, user: userObject });
  } catch (error) {
    return res.status(500).json({ success: false, message: error });
  }
};
