import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";

import challengersRoutes from "./routes/challenger.routes.js";

const app = express();

app.use(express.json());
app.use(fileUpload());
app.use(cors());

app.use("/api/challengers", challengersRoutes);

export default app;