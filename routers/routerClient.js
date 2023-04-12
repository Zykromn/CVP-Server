import {Router} from "express";
import clientService from "../services/clientService.js";

const routerClient = Router();

routerClient.post("/regcli", clientService.create)

export default routerClient;