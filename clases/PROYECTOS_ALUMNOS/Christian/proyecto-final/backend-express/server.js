// Carga de variables de entorno (.env)
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const mongoose = require("mongoose");

const app = express();

/* -------------------- Config básica -------------------- */
const PORT = process.env.PORT || 3001;
const allowed = (process.env.CORS_ORIGIN || "http://localhost:5173,http://localhost:5174")
  .split(",")
  .map(s => s.trim());

app.use(cors({ origin: allowed, credentials: true }));
app.use(express.json());

/* Asegurar carpeta /uploads */
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

/* Servir archivos estáticos subidos */
app.use("/uploads", express.static(uploadsDir));

/* -------------------- Multer (subida de imágenes) -------------------- */
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadsDir),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname || "") || ".jpg";
    cb(null, `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`);
  },
});
const upload = multer({ storage });

/* -------------------- Conexión MongoDB -------------------- */
mongoose.set("strictQuery", true);

// Transform para exponer "id" en vez de "_id"
const toJSONTransform = {
  virtuals: true,
  versionKey: false,
  transform: (_doc, ret) => {
    ret.id = ret._id?.toString?.();
    delete ret._id;
    return ret;
  },
};

// Esquemas y modelos
const ProductSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, trim: true },
    descripcion: { type: String, default: "" },
    precio: { type: Number, default: null },
    imagenUrl: { type: String, default: null },
  },
  { timestamps: true, toJSON: toJSONTransform }
);

const SaleSchema = new mongoose.Schema(
  {
    fecha: { type: Date, default: Date.now },
    desarrollador: { type: String, default: "Christian Jaramillo" },
    app: { type: String, default: "React" },
    producto: {
      id: String,
      nombre: String,
      precio: Number,
    },
  },
  { timestamps: true, toJSON: toJSONTransform }
);

const Product = mongoose.model("Product", ProductSchema);
const Sale = mongoose.model("Sale", SaleSchema);

// Seed (solo si la colección está vacía)
async function ensureSeed() {
  try {
    const count = await Product.countDocuments();
    if (count === 0) {
      await Product.insertMany([
        {
          nombre: "Camiseta React",
          descripcion: "Camiseta con logo React",
          precio: 19.99,
          imagenUrl:
            "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        },
        {
          nombre: "Taza React",
          descripcion: "Taza blanca con logo",
          precio: 9.99,
          imagenUrl:
            "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=800&q=80&auto=format&fit=crop",
        },
        {
          nombre: "Sticker JS",
          descripcion: "Pegatina JavaScript",
          precio: 2.5,
          imagenUrl:
            "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        },
      ]);
      console.log("🌱 Seed de productos insertado");
    }
  } catch (e) {
    console.error("Seed error:", e.message);
  }
}

// Conectar y luego seed
mongoose
  .connect(process.env.MONGODB_URI) // p.ej. mongodb://127.0.0.1:27017/proyecto5
  .then(() => {
    console.log("✅ MongoDB conectado");
    return ensureSeed();
  })
  .then(() => console.log("🌱 Seed verificado/listo"))
  .catch((err) => console.error("❌ Error MongoDB:", err.message));

/* -------------------- Rutas API -------------------- */

// Health y raíz
app.get("/api/health", (_req, res) => res.json({ ok: true }));
app.get("/", (_req, res) => res.send("API OK"));

// Listar productos
app.get("/api/proyecto5/react", async (_req, res) => {
  try {
    const productos = await Product.find().sort({ createdAt: -1 });
    res.json(productos);
  } catch (err) {
    console.error("GET productos error:", err);
    res.status(500).json({ error: "Error obteniendo productos" });
  }
});

// Detalle producto
app.get("/api/proyecto5/react/:id", async (req, res) => {
  try {
    const p = await Product.findById(req.params.id);
    if (!p) return res.status(404).json({ error: "Producto no encontrado" });
    res.json(p);
  } catch (err) {
    console.error("GET producto error:", err);
    res.status(500).json({ error: "Error obteniendo producto" });
  }
});

// Crear producto (form-data con 'imagen' o JSON con 'imagenUrl')
app.post("/api/proyecto5/react", upload.single("imagen"), async (req, res) => {
  try {
    const { nombre, descripcion, precio, imagenUrl } = req.body || {};
    if (!nombre) return res.status(400).json({ error: "nombre es obligatorio" });

    let url = imagenUrl || null;
    if (req.file) url = `/uploads/${req.file.filename}`;

    const nuevo = await Product.create({
      nombre,
      descripcion: descripcion || "",
      precio:
        precio != null && String(precio).trim() !== "" ? Number(precio) : null,
      imagenUrl: url,
    });

    res.status(201).json(nuevo);
  } catch (err) {
    console.error("POST producto error:", err);
    res.status(500).json({ error: "Error creando producto" });
  }
});

// Actualizar producto
app.put("/api/proyecto5/react/:id", upload.single("imagen"), async (req, res) => {
  try {
    const { nombre, descripcion, precio, imagenUrl } = req.body || {};
    const update = {};

    if (typeof nombre !== "undefined") update.nombre = nombre;
    if (typeof descripcion !== "undefined") update.descripcion = descripcion;
    if (typeof precio !== "undefined")
      update.precio = String(precio).trim() === "" ? null : Number(precio);

    if (req.file) update.imagenUrl = `/uploads/${req.file.filename}`;
    else if (typeof imagenUrl !== "undefined") update.imagenUrl = imagenUrl || null;

    const p = await Product.findByIdAndUpdate(req.params.id, update, {
      new: true,
    });
    if (!p) return res.status(404).json({ error: "Producto no encontrado" });
    res.json(p);
  } catch (err) {
    console.error("PUT producto error:", err);
    res.status(500).json({ error: "Error actualizando producto" });
  }
});

// Eliminar producto
app.delete("/api/proyecto5/react/:id", async (req, res) => {
  try {
    const removed = await Product.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ error: "Producto no encontrado" });
    res.json({ ok: true, removed });
  } catch (err) {
    console.error("DELETE producto error:", err);
    res.status(500).json({ error: "Error eliminando producto" });
  }
});

// Registrar venta
app.post("/api/proyecto5/ventas", async (req, res) => {
  try {
    const { productoId, desarrollador, app: appName } = req.body || {};
    const prod = await Product.findById(productoId);
    if (!prod) return res.status(404).json({ error: "Producto no encontrado" });

    const venta = await Sale.create({
      desarrollador: desarrollador || "Christian Jaramillo",
      app: appName || "React",
      producto: {
        id: prod.id, // gracias al transform ya es string
        nombre: prod.nombre,
        precio: prod.precio,
      },
    });

    res.json({ message: "✅ Compra registrada", venta });
  } catch (err) {
    console.error("POST venta error:", err);
    res.status(500).json({ error: "Error registrando compra" });
  }
});

/* -------------------- Server ON -------------------- */
app.listen(PORT, () => {
  console.log(`Backend: http://localhost:${PORT}`);
});
