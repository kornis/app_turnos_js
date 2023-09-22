const dbStoreService = require("../../infrastructure/services/storeService");
const { ParamsError } = require("../../utils/errorHandler");

async function getStoreEmployees(req, res) {
    
    try {
        if(!req.params.store) {
            throw new ParamsError("Parametro store es requerido");
        }
        const employees = await dbStoreService.getStoreEmployees(req.params.store);
        return res.status(200).json({
            code: res.statusCode,
            employees
        })
        
    } catch(error) {
        console.log(error);
        throw error;
    }
}

function getStoreEmptySlots(store_id) {

}

module.exports = {
    getStoreEmployees,
    getStoreEmptySlots
}