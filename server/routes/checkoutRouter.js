import { Router } from "express";
import { getCheckout, postCheckout, deleteCheckout, putCheckout} from "../controllers/checkout.js";

//declaro el router
const checkout = Router();

checkout.get("/", getCheckout);

checkout.post("/", postCheckout);

checkout.delete("/", deleteCheckout);

checkout.put("/", putCheckout);


export default checkout;
