const dbAdminService = require("../../infrastructure/services/admin");
const { Store, Employee, AppointmentType } = require("../entities");

module.exports = {
    addStore: async (req, res) => {
        if(!req.body.name || !req.body.street || !req.body.country) {
            return res.status(400).json({
                code: res.statusCode,
                error: "Params error"
            })
        }
        const store = new Store(req.body);
        const result = await dbAdminService.addStore(store); 
        return res.status(201).json({
            code: res.statusCode,
            data: result
        })
    },

    addEmployee: async (req, res) => {
        if(!req.body.name || !req.body.lastname || !req.body.store) {
            return res.status(400).json({
                code: res.statusCode,
                error: "Params error"
            });
        }
        const employee = new Employee(req.body);
        const result = await dbAdminService.addEmployee(employee.getEmployeeData());
        return res.status(201).json({
            code: res.statusCode,
            data: result
        })
    },

    addAppointmentType: async (req, res) => {
        if(!req.body.name || !req.body.duration) {
            return res.status(400).json({
                code: res.statusCode,
                error: "Params error"
            })
        }

        const appointmentType = new AppointmentType(req.body);
        const result = await dbAdminService.addAppointmentType(appointmentType);
        return res.status(201).json({
            code: res.statusCode,
            data: result
        })
    }
}