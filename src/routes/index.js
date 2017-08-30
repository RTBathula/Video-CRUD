import express from "express";
import videoRoutes from "./video";
const router = express.Router();

//Mount video routes at /video
router.use("/video", videoRoutes);
export default router;
