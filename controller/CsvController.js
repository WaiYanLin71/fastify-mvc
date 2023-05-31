import User from "../models/User.js";
import CsvService from "../services/csv-service.js"

export const exportUserList = async (req, res) => {
    const user = await User.find().select('_id name email password');
    const csvService = new CsvService(user);
    const csv =  csvService.wrirte()
    res.header('Content-Type', 'text/csv');
    res.header('Content-Disposition', 'attachment; filename="output.csv"');
    res.send(csv);
}