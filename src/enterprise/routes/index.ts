import { Router } from "express";
import CatalogController from "../controllers/CatalogController";
import EnterpriseSignupController from "../controllers/EnterpriseSignupController";


const enterpriseSignupController = new EnterpriseSignupController()

const catalogController = new CatalogController()

const enterpriseRoutes = Router();


enterpriseRoutes.post('/signup/enterprise', enterpriseSignupController.create)

enterpriseRoutes.post('/catalog/create', catalogController.create)

enterpriseRoutes.get('/catalog', catalogController.getProucts)

enterpriseRoutes.get('/catalog/product/:id', catalogController.getProuct)

export default enterpriseRoutes