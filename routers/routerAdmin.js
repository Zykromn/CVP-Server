import {Router} from "express";
import adminService from "../services/adminService.js";
const routerAdmin = Router();

routerAdmin.post("/regadm", adminService.create)
routerAdmin.get("/chkadm", adminService.check)

export default routerAdmin;