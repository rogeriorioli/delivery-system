import { Request, Response } from "express";
import UserModelSchema from "../../models/UserModelSchema";
import { hash } from "bcryptjs";

type UserSignup = {
  name: string;
  email: string;
  password: string;
};

export default class SignUpController {
  async signUp(req: Request, res: Response) {
    const { name, email, password }: UserSignup = req.body;
    const hashedPassword = await hash(password, 8);
    const userExist = await UserModelSchema.findOne({ email });
    const user = {
      name,
      email,
      password: hashedPassword,
    };
    if (!userExist) {
      await UserModelSchema.create(user);
      return res.status(200).json({ message: `${user.name} created` });
    }

    res.status(400).json({
      message: `${userExist?.email} exist in our database`,
    });
  }
}
