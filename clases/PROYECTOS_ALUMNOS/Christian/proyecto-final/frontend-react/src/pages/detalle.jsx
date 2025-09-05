import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { apiGet, apiJson } from "../api";

export default function Detalle(){
  const { id } = useParams();
  const [p, setP] = useState(null);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  const load = async ()=>{
    setMsg(""); setErr("");
    try{ setP(await apiGet("/api/proyecto5/react/"+id)); }
    catch(e){ setErr(String(e.message||e)); }
  };

  useEffect(()=>{ load(); },[id]);

  const comprar = async ()=>{
    setMsg(""); setErr("");
    try{
      const d = await apiJson("/api/proyecto5/ventas","POST",{
        productoId: p.id, desarrollador: "Christian Jaramillo", app: "React"
      });
      setMsg(d.message || "✅ Compra registrada");
      alert(d.message || "✅ Compra registrada");
    }catch(e){ setErr(String(e.message||e)); }
  };

  if(!p) return (
    <>
      <p className="small">Cargando… {err && <span className="err">({err})</span>}</p>
      <Link className="btn" to="/">Volver</Link>
    </>
  );

  return (
    <>
      <h2>Detalle de producto</h2>
      {err && <div className="notice err">Error: {err}</div>}
      {msg && <div className="notice ok">{msg}</div>}
      <div className="card" style={{maxWidth:700}}>
        <div className="imgwrap"><img src={p.imagenUrl||""} alt={p.nombre} onError={(e)=>{e.currentTarget.src=""}}/></div>
        <div className="body">
          <h3 style={{margin:"0 0 6px"}}>{p.nombre}</h3>
          <p className="small" style={{margin:"0 0 8px"}}>{p.descripcion||"—"}</p>
          <p><b>€{p.precio??"—"}</b></p>
          <div style={{display:"flex", gap:8}}>
            <button className="btn" onClick={comprar}>Comprar</button>
            <Link className="btn" to="/">Volver</Link>
          </div>
        </div>
      </div>
    </>
  );
}
