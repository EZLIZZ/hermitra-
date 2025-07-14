import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.route.js"
import periodRoutes from "./routes/period.route.js"
import dailyLogRoutes from "./routes/dailyLog.route.js"
import exerciseRoutes from "./routes/exercise.route.js"
import errorHandler from './middlewares/errorHandler.middleware.js';
// import orderRoutes from "./routes/order.routes.js"
// import paymentRoutes from "./routes/payment.routes.js"
// import recommendRoutes from "./routes/recommend.routes.js"

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// app.use(cors({
//     origin: "https://book-owll.vercel.app",
//     "https://bookowlai.onrender.com",
//      // Replace with your frontend URL
//     credentials: true, // Allow cookies to be sent
//   }));

app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Backend Server - Alisha" });
});
app.use('/public', express.static('public'));

app.use('/auth', authRoutes)
app.use('/period', periodRoutes)
app.use('/Logs', dailyLogRoutes)
app.use('/exercise', exerciseRoutes)
// app.use('/book',bookRoutes)
// app.use('/userProfile',userRoutes)
// app.use('/cart',cartRoutes)
// app.use('/category',categoryRoutes)
// app.use('/author',authorRoutes)
// app.use('/contact',contactUsRoutes)
// app.use('/order',orderRoutes)
// app.use('/payment',paymentRoutes)
// app.use('/recommend',recommendRoutes)

// app.use((err, req, res, next) => {
//   console.error(err.stack);  // Optional: Log the error stack for debugging

//   // If the error is an instance of ApiError
//   if (err instanceof ApiError) {
//     return res.status(err.statusCode).json({
//       success: err.success,
//       message: err.message,
//       errors: err.errors || [],
//       stack: process.env.NODE_ENV === 'development' ? err.stack : null,  // Show stack trace in development only
//     });
//   }

//   // For other unknown errors
//   res.status(500).json({
//     success: false,
//     message: 'Internal Server Error',
//   });
// });
//hello final update

app.use(errorHandler);

export default app;
