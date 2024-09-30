//Import Statements
import mongoose from 'mongoose'

//DataSchema
const DataSchema = new mongoose.Schema({
    country: { type: String, required: true },           
    city: { type: String },                              
    intensity: { type: Number, required: true },        
    likelihood: { type: Number, required: true },        
    relevance: { type: Number, required: true },     
    topic: { type: String, required: true },             
    sector: { type: String, required: true },           
    start_year: { type: String, required: true },        
    end_year: { type: String, default: '' },            
    insight: { type: String },                            
    url: { type: String },                                
    region: { type: String },                           
    impact: { type: String },                             
    added: { type: Date, default: Date.now },           
    published: { type: Date },                           
    pestle: { type: String },                             
    source: { type: String },                             
    title: { type: String }, 
})

//DataModel
 const DataModel = mongoose.model('datas', DataSchema)


 //Export statement
 export default DataModel
