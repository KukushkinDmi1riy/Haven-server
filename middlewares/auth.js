import jwt from 'jsonwebtoken';

const JWT_SECRETS= process.env.JWT_SECRETS;

export const requireSignin = (req, res, next) => {
  try {
    const decode = jwt.verify(req.headers.authorization, JWT_SECRETS);
    req.user = decode;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
};
