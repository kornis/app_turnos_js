module.exports = {
    db: {
        name: process.env.DB_NAME || "negocio",
        pass: process.env.DB_PASS || "",
        port: process.env.DB_PORT || 5432,
        host: process.env.DB_HOST
    }
}