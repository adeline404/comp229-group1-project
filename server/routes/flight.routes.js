import express from "express";
import flightController from "../controllers/flight.controller.js";

const router = express.Router();

router.get("/flights", flightController.getFlights);
router.post("/flights", flightController.createFlight);
router.put("/flights/:id", flightController.updateFlight);
router.delete("/flights/:id", flightController.deleteFlight);

export default router;
