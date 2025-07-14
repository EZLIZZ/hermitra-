import express from "express";
import { addPeriod, getMyPeriods, updatePeriod, deletePeriod, getCycleInfo } from "../controllers/period.controller.js";
import { verifyUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

// router.use(authMiddleware); // Protect all routes

router.route("/addPeriod").post(verifyUser, addPeriod);                        // POST - Add period
router.route("/history").get(verifyUser, getMyPeriods);                  // GET - Get all periods
router.route("/updatePeriod/:id").put(verifyUser, updatePeriod);               // PUT - Update specific period
router.route("/deletePeriod/:id").delete(verifyUser, deletePeriod);            // DELETE - Delete specific period
router.route("/getCycleInfo").get(verifyUser, getCycleInfo);


export default router;
