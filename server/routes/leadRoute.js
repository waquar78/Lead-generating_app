import express from "express";
import { deleteLead, getAllLeads, leadGenerate } from "../controller/leadController.js";

const router=express.Router();

router.route("/generate").post(leadGenerate);
router.route("/all").get(getAllLeads);
router.route("/delete/:id").delete(deleteLead)

export default router;