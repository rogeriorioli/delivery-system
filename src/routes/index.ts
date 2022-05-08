import axios from "axios";
import { Router, Request, Response } from "express";
import nodeGeocoder, { OpenStreetMapOptions, Query } from "node-geocoder";
import AddressController from "../controllers/AdressController";
import SignUpController from "../controllers/SignUpController";


const signUpController = new SignUpController();

const addressController = new AddressController();

const routes = Router();

routes.post('/signup', signUpController.signUp)

routes.post('/useraddresses', addressController.AddAddress)
routes.get('/useraddresses/', addressController.getAddresseByUser)
routes.delete('/useraddresses/:id', addressController.deleteAddresseByUser)
//|todo create a controller for this implementation

// routes.get("/getaddress", async (req: Request, res: Response) => {
//   const { cep, number } = req.body;
//   axios
//     .get("https://ws.apicep.com/cep/" + cep + ".json")
//     .then(async (success) => {
//       const { data } = success;
//       const { address, district } = data;
//       const options: OpenStreetMapOptions = {
//         provider: "openstreetmap",
//       };
//       const geoCoder = nodeGeocoder(options);
//       await geoCoder
//         .geocode((address) as Query)
//         .then((resonse) => {
//           const { latitude, longitude, streetName, city, state } = resonse[1];
//           res.json({
//             latitude,
//             longitude,
//             zipcode: cep,
//             bairro: district,
//             streetName,
//             city,
//             state,
//             number,
//           });
//         })
//         .catch((err) => {
//           res.json(err);
//         });
//     }).catch((err) => {
//       res.json(err.data);
//     });
//});




export default routes