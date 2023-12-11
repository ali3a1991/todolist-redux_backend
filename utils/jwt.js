import jwt from "jsonwebtoken";

export const createToken = (payloud) => {
  return jwt.sign(payloud, process.env.JWT_SECRET, { expiresIn: "45min" });
};

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
