import { hash } from "bcryptjs";
import { Request, Response } from "express";
import EnterpriseModelSchema from "../../models/EnterpriseModelSchema";
import { EnterpriseSignup } from "./types";

export default class EnterpriseSignupController {
  async create(req: Request, res: Response) {
    const { name, email, password, cnpj, phone }: EnterpriseSignup = req.body;
    const hashedPassword = await hash(password, 8);
    const enterprise = await EnterpriseModelSchema.findOne({ cnpj });
    if (!enterprise) {
      const data = await EnterpriseModelSchema.create({
        name,
        email,
        phone,
        password: hashedPassword,
        cnpj,
      });
      res.status(200).json({ message: `enterprise ${name} created`, data });
    }
    res.status(400).json({ message: `enterprise ${cnpj} exist` , enterprise });
  }
}
