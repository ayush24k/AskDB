import express from "express";
import cors from "cors";
import helmet from "helmet"; // set htttp response header
import morgan from "morgan"; // https request loader
import { errorHandler } from "./common/middleware/errorHandler";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(errorHandler);

export default app;