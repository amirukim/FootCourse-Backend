import express from "express";
import { getUsers, Register, Login, Logout, updateTestLevel, getUsersByName } from "../controller/Users.js";
import { getLearnModul } from "../controller/Learns.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controller/RefreshToken.js";
import { getBoot } from "../controller/Boots.js";
import { getTechniqueModul, getModulByAspect, getVideoByModul, getSelectedModule, getSelectedFitnessModule, getFitnessModul } from "../controller/Trains.js";
import { getTechniqueTest, getFitnessTest, getSelectedTest } from "../controller/Test.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/users", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.get("/learn", getLearnModul);
router.get("/boot", getBoot);
router.get("/train/technique", getTechniqueModul);
router.get("/train/technique/:aspect", getModulByAspect);
router.get("/train/technique/:aspect/:courseName/video", getVideoByModul);
router.get("/train/fitness/:courseName/video", getVideoByModul);
router.get("/train/technique/:aspect/:courseName", getSelectedModule);
router.get("/train/fitness/:courseName", getSelectedFitnessModule);
router.get("/train/fitness", getFitnessModul);
router.get("/test/fitness", getFitnessTest);
router.get("/test/technique", getTechniqueTest);
router.get("/test/:category/:testName", getSelectedTest);
router.patch("/users/:name", updateTestLevel);
router.get("/users/:name", getUsersByName);

router.delete("/logout", Logout);

export default router;
