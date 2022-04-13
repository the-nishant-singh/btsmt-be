// Get dependencies
import * as express from "express";
import * as compression from "compression";
import * as cors from "cors";

// Get DB
import * as models from "./db";

// get routes group
import { api } from "./routes/api";

try {
  const app = express();
  app.use(cors());

  // Parsers for POST data
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // for gzipping
  app.use(compression());

  app.get('/', (req, res) => {
    res.json({ health: 'OK' })
  })

  // Set our api routes
  app.use("/api", api);

  // Catch all other routes and return the index file

  const port = process.env.PORT || "8000";
  app.set("port", port);
  app.listen(port, () => console.info(`API running on localhost:${port}`));
} catch (error) {
  process.exit(1);
}
