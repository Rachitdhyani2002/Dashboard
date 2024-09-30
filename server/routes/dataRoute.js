//Import statements
import express from 'express'
import  fetchDataController  from '../controllers/getDataController.js'

//Router object
const router = express.Router()

//Get data route Method:Get
router.get('/fetch-data',fetchDataController)

//Export Statement
export default router;