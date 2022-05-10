
import { Request, Response } from "express";
import EnterpriseCatalogModelSchema from "../../models/EnterpriseCatalogModelSchema";
import EnterpriseModelSchema from "../../models/EnterpriseModelSchema";
import { Catalog } from "./types";

export default class CatalogController {
  async create(req: Request, res: Response) {
    const {enterpriseid} = req.headers
    const {
      name,
      image,
      description,
      price,
    }: Catalog = req.body;
    const enterprise = await EnterpriseModelSchema.findById(enterpriseid);
    console.log(enterprise)
      if (!enterprise) {
        res.status(400).json({ message: `something went wrong`, });
      }
      
      const data = await EnterpriseCatalogModelSchema.create({
        enterpriseId : enterpriseid,
        name,
        image,
        description,
        price,
      });
      res.status(200).json({ message: `product ${name} created`, data });
  }

  async getProucts(req : Request, res : Response) {
    const products = await EnterpriseCatalogModelSchema.find();
    res.json(products)
  }
}