import { Router, Request, Response } from "express";
import { registerSchema } from "../validation/authValidator.js";
import { ZodError } from "zod";
import { formateError } from "../helper.js";
import prisma from "../config/database.js";
import bcrypt from "bcrypt";

const router = Router();

// * Register Route
router.post("/", async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const payload = registerSchema.parse(body);

    // check if user already exists
    let user = await prisma.user.findUnique({
      where: { email: payload.email },
    });

    if (user) {
      res
        .status(409)
        .json({ message: "Email already taken. Please use another one." });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    payload.password = await bcrypt.hash(payload.password, salt);

    await prisma.user.create({
      data: {
        name: payload.name,
        email: payload.email,
        password: payload.password,
      },
    });
    res.status(200).json({message: "Account created successfully"});
  } catch (error) {
    if (error instanceof ZodError) {
      const errors = formateError(error);
      res.status(422).json({ message: "Invalid Data", errors });
    }
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again!" });
  }
});

export default router;
