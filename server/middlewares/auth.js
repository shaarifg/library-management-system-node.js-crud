import jwt from "jsonwebtoken";

export const verifyUser = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      let user = jwt.verify(token, "Sharif");
      req.userId = user.id;
    } else {
      res.status(401).send("Unauthorized user");
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send("Unauthorized user");
  }
};
