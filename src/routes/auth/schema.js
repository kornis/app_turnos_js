module.exports = {
    login: {
        type: "object",
        properties: {
            email: {
                type: "string",
                format: "email"
            },
            password: {
                type: "string"
            }
        },
        required: ["email", "password"]
    },
    register: {
        type: "object",
        properties: {
            name: {
                type: "string"
            },
            lastname: {
                type: "string"
            },
            email: {
                type: "string",
                format: "email"
            },
            password: {
                type: "string"
            },
            repeat_password: {
                type: "string"
            },
            id_number: {
                type: "string"
            }
        },
        required: ["name", "email", "password", "repeat_password"]
    }
}