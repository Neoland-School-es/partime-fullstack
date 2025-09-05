import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiGet, apiJson } from "../api";

export default function Inicio(){
  const [items, setItems] = useState([]);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  const load = async () => {
    setMsg(""); setErr("");
    try {
      const d = await apiGet("/api/proyecto5/react");
      setItems(d);
    } catch(e){ setErr(String(e.message||e)); }
  };

  useEffect(()=>{ load(); },[]);

  const comprar = async (prod) => {
    setMsg(""); setErr("");
    try{
      const d = await apiJson("/api/proyecto5/ventas","POST",{
        productoId: prod.id,
        desarrollador: "Christian Jaramillo",
        app: "React"
      });
      setMsg(d.message || "✅ Compra registrada");
      alert(d.message || "✅ Compra registrada");
    }catch(e){ setErr(String(e.message||e)); }
  };

  return (
    <>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"8px 0 14px"}}>
        <h2 style={{margin:0}}>Catálogo</h2>
        <button className="btn" onClick={load}>Recargar</button>
      </div>

      {err && <div className="notice err">Error: {err}</div>}
      {msg && <div className="notice ok">{msg}</div>}

      <div className="grid">
        {items.map(p=>(
          <div className="card" key={p.id}>
            <div className="imgwrap">
              <img src={p.imagenUrl || ""} alt={p.nombre} onError={(e)=>{e.currentTarget.src=""}}/>
            </div>
            <div className="body">
              <h3 style={{margin:"0 0 6px"}}>{p.nombre}</h3>
              {p.descripcion && <p className="small" style={{margin:"0 0 8px"}}>{p.descripcion}</p>}
              {p.precio!=null && <p><b>€{p.precio}</b></p>}
              <div style={{display:"flex", gap:8}}>
                <button className="btn" onClick={()=>comprar(p)}>Comprar</button>
                <Link className="btn" to={`/productos/${p.id}`}>Detalle</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {items.length===0 && !err && <p className="small">No hay productos</p>}
    </>
  );
}
