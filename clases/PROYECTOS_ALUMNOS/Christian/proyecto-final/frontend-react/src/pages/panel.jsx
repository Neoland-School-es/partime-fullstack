import { useEffect, useState } from "react";
import { apiGet, apiForm } from "../api";

export default function Panel(){
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ nombre:"", descripcion:"", precio:"", imagenUrl:"", imagen:null });
  const [editId, setEditId] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  const load = async () => {
    setMsg(""); setErr("");
    try{
      setItems(await apiGet("/api/proyecto5/react"));
    }catch(e){ setErr(String(e.message||e)); }
  };
  useEffect(()=>{ load(); },[]);

  const onChange = (e)=>{
    const { name, value, files } = e.target;
    if (files) setForm(f=>({...f, [name]: files[0]}));
    else setForm(f=>({...f, [name]: value}));
  };

  const submit = async (e)=>{
    e.preventDefault(); setMsg(""); setErr("");
    try{
      const fd = new FormData();
      if(form.nombre) fd.append("nombre", form.nombre);
      if(form.descripcion) fd.append("descripcion", form.descripcion);
      if(form.precio!=="") fd.append("precio", form.precio);
      if(form.imagen) fd.append("imagen", form.imagen);
      else if(form.imagenUrl) fd.append("imagenUrl", form.imagenUrl);

      if(editId){
        await apiForm("/api/proyecto5/react/"+editId, "PUT", fd);
        setMsg("✅ Producto actualizado");
      }else{
        await apiForm("/api/proyecto5/react", "POST", fd);
        setMsg("✅ Producto creado");
      }
      setForm({ nombre:"", descripcion:"", precio:"", imagenUrl:"", imagen:null });
      setEditId("");
      await load();
    }catch(e){ setErr(String(e.message||e)); }
  };

  const editar = (p)=>{
    setEditId(p.id);
    setForm({ nombre:p.nombre||"", descripcion:p.descripcion||"", precio:p.precio??"", imagenUrl:p.imagenUrl||"", imagen:null });
  };

  const eliminar = async (id)=>{
    setMsg(""); setErr("");
    try{
      await apiForm("/api/proyecto5/react/"+id, "DELETE", new FormData());
      setMsg("🗑️ Producto eliminado");
      await load();
    }catch(e){ setErr(String(e.message||e)); }
  };

  const cancelar = ()=>{ setEditId(""); setForm({ nombre:"", descripcion:"", precio:"", imagenUrl:"", imagen:null }); };

  return (
    <>
      <h2>Panel (CRUD)</h2>
      {err && <div className="notice err">Error: {err}</div>}
      {msg && <div className="notice ok">{msg}</div>}

      <form onSubmit={submit} style={{display:"grid", gap:10, margin:"10px 0 18px"}}>
        <div className="row">
          <div>
            <label className="label">Nombre *</label>
            <input className="input" name="nombre" value={form.nombre} onChange={onChange} required />
          </div>
          <div>
            <label className="label">Precio</label>
            <input className="input" name="precio" value={form.precio} onChange={onChange} type="number" step="0.01"/>
          </div>
        </div>
        <div>
          <label className="label">Descripción</label>
          <input className="input" name="descripcion" value={form.descripcion} onChange={onChange} />
        </div>
        <div className="row">
          <div>
            <label className="label">Imagen (archivo)</label>
            <input className="file" name="imagen" type="file" accept="image/*" onChange={onChange}/>
          </div>
          <div>
            <label className="label">o Imagen por URL</label>
            <input className="input" name="imagenUrl" value={form.imagenUrl} onChange={onChange} placeholder="https://..." />
          </div>
        </div>
        <div style={{display:"flex", gap:10}}>
          <button className="btn" type="submit">{editId ? "Guardar cambios" : "Crear producto"}</button>
          {editId && <button className="btn" type="button" onClick={cancelar}>Cancelar</button>}
        </div>
      </form>

      <div className="grid">
        {items.map(p=>(
          <div className="card" key={p.id}>
            <div className="imgwrap"><img src={p.imagenUrl||""} alt={p.nombre} onError={(e)=>{e.currentTarget.src=""}}/></div>
            <div className="body">
              <h3 style={{margin:"0 0 6px"}}>{p.nombre}</h3>
              <p className="small" style={{margin:"0 0 6px"}}>{p.descripcion||"—"}</p>
              <p><b>€{p.precio??"—"}</b></p>
              <div style={{display:"flex", gap:8}}>
                <button className="btn" onClick={()=>editar(p)}>Editar</button>
                <button className="btn" onClick={()=>eliminar(p.id)}>Eliminar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
