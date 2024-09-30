//Import statements
import DataModel from '../database/models/dataModel.js'

//Fetch Data Controller Function
 const fetchDataController = async (req, res) => {
    try {
        //Request from client side
        const filters = req.query

        if (req.query.start_year) filters.start_year = req.query.start_year;
        if (req.query.end_year) filters.end_year = req.query.end_year;
        if (req.query.country) filters.country = { $regex: new RegExp(req.query.country, 'i') }; // Case-insensitive
        if (req.query.sector) filters.sector = { $regex: new RegExp(req.query.sector, 'i') }; // Case-insensitive
        if (req.query.topic) filters.topic = { $regex: new RegExp(req.query.topic, 'i') }; // Case-insensitive

        //Finding data in database
        const data = await DataModel.find(filters)
        

        //Sending ok response
        res.status(200).send({ success: true, message: 'Successfully fetched data', data })
    }
    catch (error) {
        res.status(500).send({ success: false, message: `Error while fetching the data ${error}` })
        console.error(`Error while fetching the products ${error}`)
    }
}

//Export statement
export default fetchDataController