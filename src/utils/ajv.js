const Ajv = require('ajv');
const ajv = new Ajv();

// Importar schemas de caad ruta para compilarlos y exportar validador
const addAppointmentSchema = require("../schemas/addAppointmentSchema");

const addAppointmentValidate = ajv.compile(addAppointmentSchema);

module.exports = { addAppointmentValidate };