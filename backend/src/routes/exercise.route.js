import { Router } from "express";
import { verifyUser } from "../middlewares/auth.middleware.js";
import { addExerciseLog, deleteExerciseLog, getExerciseLogsByDay, getExerciseLogsByMonth, getExerciseLogsByWeek, getExerciseStreak, updateExerciseLog } from "../controllers/exercise.controller.js";

const router = Router();
router.route("/addExercise").post(verifyUser,addExerciseLog);
router.route("/updateExercise/:id").put(verifyUser, updateExerciseLog);
router.route("/deleteExercise").delete(verifyUser,deleteExerciseLog);
router.route("/exerciseDay").get(verifyUser, getExerciseLogsByDay);
router.route("/exerciseMonth").get(verifyUser, getExerciseLogsByMonth);
router.route("/exerciseWeek").get(verifyUser, getExerciseLogsByWeek);
router.route("/exerciseStreak").get(verifyUser, getExerciseStreak)

export default router;