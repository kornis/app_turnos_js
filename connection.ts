import { DataSource } from "typeorm";
import config from "../utils/config";
import * as Entities from "../domain/entities";
export const DB = new DataSource({
    type: "mysql",
    host: config.DB.HOST,
    port: config.DB.PORT as number,
    username: config.DB.USER,
    password: config.DB.PASS,
    database: config.DB.NAME,
    logging: true,
    entities: [Entities.AppointmentEntity, Entities.CustomerEntity]
});