import adminData from "./schemes/adminModel.js"

class adminService {
    async create(req, res) {
        try {
            const admin = await adminData.create(req.body)
            res.status(200).json(admin)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async check(req, res) {
        try {
            const {email, password} = req.query;
            const admin = await adminData.find({email: email, password: password})
            if (admin.length !== 0) {
                res.status(200).json({"status": true})
            } else {
                res.status(200).json({"status": false})
            }
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async parse(req, res) {
        
    }
}

export default new adminService();