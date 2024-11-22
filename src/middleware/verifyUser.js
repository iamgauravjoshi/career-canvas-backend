import jwt from "jsonwebtoken";

// Middleware to check if the user is authenticated
const verifyUser = (req, res, next) => {
    const token = req.header("Authorization").replace("Bearer ", "");

    if (!token) {
       return res
          .status(401)
          .json({ message: "No token provided. Unauthorized." });
    }
 
    try {
       const decoded = jwt.verify(token, process.env.JWT_SECRET);
       req.user = decoded; // Attach the decoded user data to the request
       next(); // Move to the next middleware or route handler
    } catch (error) {
       res.status(401).json({ message: "Invalid token. Unauthorized." });
    }
};

export default verifyUser;
