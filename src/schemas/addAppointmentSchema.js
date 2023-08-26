module.exports = {
    type: "object",
    properties: {
        date: { type: "string" },
        employee: { type: "number" },
        store: { type: "number" },
        type: { type: "number" },
        hour: { type: "string" }
    },
    required: ["date", "employee", "store", "type", "hour"]
}