const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    apis: ["./routes/*.js"],
    definition: {
        openapi: "3.0.0",
        info: {
            title: "REST MUSICDB API",
            version: "1.0.0",
            description: "Documentation for REST API"
        },
        servers: [
            {
                url: "http://localhost:3200/api/v1"
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            },
            schemas: {
                track_sql: {
                    type: "object",
                    required: ["name", "album", "cover", "artist_name", "artist_nickname", "artist_nationality", "duration_start", "duration_end", "mediaId"],
                    properties: {
                        name: { type: "string" },
                        album: { type: "string" },
                        cover: { type: "string" },
                        artist_name: { type: "string" },
                        artist_nickname: { type: "string" },
                        artist_nationality: { type: "string" },
                        duration_start: { type: "number" },
                        duration_end: { type: "number" },
                        mediaId: { type: "string" }
                    }
                },
                track_nosql: {
                    type: "object",
                    required: ["name", "album", "cover", "artist", "duration", "mediaId"],
                    properties: {
                        name: { type: "string" },
                        album: { type: "string" },
                        cover: { type: "string" },
                        artist: { type: "object", properties: { name: { type: "string" }, nickname: { type: "string" }, nationality: { type: "string" } } },
                        duration: { type: "object", properties: { start: { type: "number" }, end: { type: "number" } } },
                        mediaId: { type: "string" }
                    }

                },
                authLogin: {
                    type: "object",
                    required: ["email", "password"],
                    properties: {
                        email: { type: "string" },
                        password: { type: "string" }
                    }
                },
                authRegister: {
                    type: "object",
                    required: ["name", "email", "password"],
                    properties: {
                        name: { type: "string" },
                        email: { type: "string" },
                        password: { type: "string" }
                    }
                },
                storage: {
                    type: "object",
                    required: ["url", "filename"],
                    properties: {
                        url: { type: "string" },
                        filename: { type: "string" }
                    }
                }
            }
        }
    }
}

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec