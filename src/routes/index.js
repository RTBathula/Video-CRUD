import express from "express";
import videoRoutes from "./video";
import sdkRoutes from "./sdk";
const router = express.Router();

//Mount routes
router.use("/video", videoRoutes);
router.use("/sdk", sdkRoutes);
export default router;
