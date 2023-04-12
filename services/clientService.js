import clientData from "./schemes/clientModel.js"

class clientService {
    async create(req, res) {
        try {
            const client = await clientData.create(req.body)
            res.status(200).json(client)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new clientService();