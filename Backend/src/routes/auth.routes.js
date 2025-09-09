import { Router } from "express";
import { registerUser } from "../controllers/auth.controller";
import { validate } from "../middleware/validator.middleware";
import { userRegistrationValidator } from "../validators";

const router = Router();

router
  .route("/register")
  .post(userRegistrationValidator(), validate, registerUser);

export default router;
