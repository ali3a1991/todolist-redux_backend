import { verifyToken } from "../utils/jwt";

export const auth = (req, res, next) => {
  const token = req.body.password;

  try {
    const payload = verifyToken(token);
    req.payload = payload;
    next();
  } catch (error) {
    res.status(500).end(error.message);
  }
};
