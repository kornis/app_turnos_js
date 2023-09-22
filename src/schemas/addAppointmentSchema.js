module.exports = {
    type: "object",
    properties: {
        date: { type: "string" },
        employee: { type: "number" },
        store: { type: "number" },
        type: { 
            type: "object",
            properties: {
                id: { type: "number" },
                duration: { type: "number" }
            }
        },
        hour: { type: "string" }
    },
    required: ["date", "employee", "store", "type", "hour"]
}