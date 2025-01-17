import express from "express";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "../swagger.json";
import authorRoutes from "./routes/author.routes";
import bookRoutes from "./routes/book.routes";
import categoryRoutes from "./routes/category.routes";
import customerRoutes from "./routes/customer.routes";
import itemSaleRoutes from "./routes/itemSale.routes";
import saleRoutes from "./routes/sale.routes";

const app = express();

// Middleware
app.use(bodyParser.json());

// Swagger setup
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);
app.use("/categories", categoryRoutes);
app.use("/customers", customerRoutes);
app.use("/sales", saleRoutes);
app.use("/items", itemSaleRoutes);

// Default route
app.get("/", (req, res) => {
  res.redirect("/swagger");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/swagger`);
});
