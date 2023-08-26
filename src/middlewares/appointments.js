const { addAppointmentValidate } = require("../utils/ajv");
const ParamsError = require("../utils/errorHandler/ParamsError");

module.exports = {
    validateAddAppointment: (req, res, next) => {
        if(addAppointmentValidate(req.body)) {
            next();
        } else {
            next(new ParamsError());
        }
    }
}