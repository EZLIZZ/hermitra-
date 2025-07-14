import { Router } from "express";
import { verifyUser } from "../middlewares/auth.middleware.js";
import { getDailyLog, getMonthlyLogs, upsertDailyLog } from "../controllers/dailyLog.controller.js";

const router = Router();
router.route("/addLog").post(verifyUser,upsertDailyLog);
router.route("/getDailyLog").get(verifyUser, getDailyLog);
router.route("/getMonthlyLog").get(verifyUser, getMonthlyLogs);

export default router;
