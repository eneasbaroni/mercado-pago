import { Router } from "express";
const router = Router();

import notifications from "./notificationsRouter.js";
import checkout from "./checkoutRouter.js";
import error from "./errorRouter.js"; 

//Rutas
router.use("/notifications", notifications);
router.use("/checkout", checkout);
router.use("*", error);



export {router};