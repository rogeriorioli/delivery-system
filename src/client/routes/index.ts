import { Router} from "express";
import AddressController from "../controllers/AdressController";
import SignUpController from "../controllers/SignUpController";


const signUpController = new SignUpController();

const addressController = new AddressController();

const routes = Router();

routes.post('/signup', signUpController.signUp)

routes.get('/useraddresses/', addressController.GetAddresseByUser)
routes.post('/useraddresses', addressController.AddAddress)
routes.put('/useraddresses/:id', addressController.UpdateAddresseByUser)
routes.delete('/useraddresses/:id', addressController.DeleteAddresseByUser)


export default routes