import { Router } from "express";
import { getNotifications} from "../controllers/checkout.js";


const notifications = Router();

notifications.post("/:userEmail/:userPhone", getNotifications);


export default notifications;