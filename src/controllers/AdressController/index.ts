import { Request, Response } from "express";
import UserModelSchema from "../../models/UserModelSchema";
import UserAdressSchema from "../../models/UserAdressSchema";

type UserAddresses = {
  userId: string;
  namePlace: string;
  position: string;
  reference: string;
  street: string;
  number: string;
  city: string;
  state: string;
  zipcode: string;
  neighborhood: string;
};

export default class AddressController {
  async AddAddress(req: Request, res: Response) {
    const { userid } = req.headers;
    const {
      namePlace,
      position,
      reference,
      street,
      number,
      city,
      state,
      neighborhood,
      zipcode,
    }: UserAddresses = req.body;
    const userExist = await UserModelSchema.findById(userid).populate("name");
    const addressExist = await UserAdressSchema.findOne({ street });
    const address = {
      userId: userid,
      namePlace,
      position,
      reference,
      street,
      number,
      city,
      state,
      neighborhood,
      zipcode,
    };
    if (!userExist) {
      res.status(400).json({
        message: `user not exist in our database`,
      });
    }
    if (!addressExist) {
      await UserAdressSchema.create(address);
      return res.status(200).json({ message: `${namePlace} created` });
    }
    res.status(400).json({ message: `${street} exist try another áddress` });
  }

  async getAddresseByUser(req: Request, res: Response) {
    const { userid } = req.headers;
    const addresses = await UserAdressSchema.find({ userId: userid });
    res.json(addresses);
  }

  async UpdateAddresseByUser(req: Request, res: Response) {
    const { id } = req.params;
    const {
      namePlace,
      position,
      reference,
      street,
      number,
      city,
      state,
      neighborhood,
      zipcode,
    }: UserAddresses = req.body;
    const addresId = await UserAdressSchema.findByIdAndUpdate(id, {
      namePlace,
      position,
      reference,
      street,
      number,
      city,
      state,
      neighborhood,
      zipcode,
    })
    res.status(200).json({ message: `${addresId?.namePlace} updated` })
  }

  async deleteAddresseByUser(req: Request, res: Response) {
    const { id } = req.params;
    const addresId = await UserAdressSchema.findById(id) 
    await UserAdressSchema.findByIdAndDelete(id)
    res.status(200).json({ message: `${addresId?.namePlace} deleted` })
  }
}
