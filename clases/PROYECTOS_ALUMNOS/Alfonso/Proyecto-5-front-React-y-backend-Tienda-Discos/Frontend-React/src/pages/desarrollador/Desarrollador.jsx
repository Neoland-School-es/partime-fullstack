import defaultImg from '/default.png';
import React from "react";



export default function Desarrollador() {

  return (
    <>
        <div className='desarrolladorClass'>

            
            <header>
                <div className="container nav">
                    <span className='fotoPerfil'>
                        <img src="/assets/AlfonsoR.png" alt="foto perfil Alfonso Rodriguez" />
                        <div className="brand">Alfonso <br/> Rodríguez <br/> Gallego</div>
                    </span>
                    <nav style={{ marginLeft: "auto", display: "flex", gap: "14px" }}>
                    <a href="#perfil">Perfil</a>
                    <a href="#experiencia">Experiencia</a>
                    <a href="#formacion">Formación</a>
                    <a href="#habilidades">Habilidades</a>
                    <a href="#contacto">Contacto</a>
                    </nav>
                </div>
            </header>

            <main className="container">
                <section>
                    <div>
                        <span className="badge">Ingeniero industrial · Migrando a desarrollo web</span>
                        <h1 className='perfil'>
                        Hola, soy Alfonso. <span className="highlight">Creo soluciones eficientes</span> donde se cruzan la
                        ingeniería y el software.
                        </h1>
                        <p className="lead">
                        Ingeniero industrial de profesión, con más de 10 años de experiencia en <strong>proyectos de construcción</strong> y <strong>fabricación industrial</strong> en empresas en Colombia y España. Actualmente hago un viraje profesional hacia el <strong>desarrollo web</strong>, aplicando mi enfoque analítico, búsqueda de eficiencia y de mejora continua a productos y soluciones digitales.
                        </p>
                    </div>
                    
                </section>

                <section id="perfil">
                    <div>
                        <h2>Sobre mí</h2>
                        <p>
                        Soy un profesional orientado a resultados tanto profesional como personalmente, con <strong>10+ años de experiencia</strong> combinada en sectores de construcción y fabricación industrial. He liderado equipos de compras, logística y abastecimiento en entornos exigentes, coordinando con múltiples stakeholders y optimizando procesos. Actualmente, impulso mi transición hacia el <strong>desarrollo web</strong>, reforzando bases sólidas en <strong>HTML, CSS, JavaScript y React</strong> para construir interfaces claras, accesibles y mantenibles.
                        </p>
                        <div className='imgProyectos'>
                            <img src="./assets/project.jpg" alt="imagen proyectos" className='project'/>
                            <img src="./assets/flecha.jpg" alt="imagen flecha" className='flecha'/>
                            <img src="./assets/full-stack-developer.png" alt="imagen web development" className='webDevelopment'/>
                        </div>
                    </div>


                    <h2>Idiomas</h2>
                    <aside className="idiomasAside">
                        <img src="./assets/idiomas.jpg" alt="imagen flecha" className='idiomas'/>
                        <ul>
                            <li>Inglés – <strong>B1</strong></li>
                            <li>Francés – <strong>B1</strong></li>
                        </ul>
                    </aside>
                </section>

                <section id="habilidades" >
                    <h2>Habilidades técnicas</h2>
                    <div className="grid">
                        <span className="pill">HTML</span>
                        <span className="pill">CSS</span>
                        <span className="pill">JavaScript</span>
                        <span className="pill">TypeScript</span>
                        <span className="pill">React</span>
                        <span className="pill">Git / GitHub</span>
                        <span className="pill">Mongo DB</span>
                        <span className="pill">Responsive Design</span>
                    </div>


                    <aside>
                        <h2>Fortalezas de ingeniería</h2>
                        <div className="grid">
                            <span className="pill">Gerencia de proyectos</span>
                            <span className="pill">Trabajo en equipo</span>
                            <span className="pill">Compras & logística</span>
                            <span className="pill">Optimización de procesos</span>
                            <span className="pill">KPI & mejora continua</span>
                            <span className="pill">Trabajo con stakeholders</span>
                        </div>
                    </aside>
                </section>




                <section id="experiencia">
                    <h2>Experiencia profesional</h2>
                    <div>
                        <div>
                            <div className="role">Residente logístico</div>
                            <div>Empresa de proyectos de construcción de edificios de vivienda · Colombia · <time>7 años</time></div>
                            <div>Gestión integral de abastecimiento y logística de obra; coordinación con proveedores, control de inventarios, programación de entregas, seguimiento presupuestal y soporte a la dirección de obra para asegurar plazos, calidad y costos.</div>
                        </div>

                        <br/>

                        <div>
                            <div className="role">Ingeniero de compras</div>
                            <div>Fabricación industrial (composites de fibra de vidrio y carbono) · España · <time>3 años</time></div>
                            <div>Negociación y homologación de proveedores, compras técnicas de materiales compuestos, planificación MRP, reducción de costes, aseguramiento de calidad y tiempos de entrega en entornos de fabricación avanzada.</div>
                        </div>
                    </div>
                </section>




                <section id="formacion">
                    <div>
                        <h2>Formación académica</h2>
                        <div>
                            <div className="item">
                                <div className="title">Ingeniería Industrial</div>
                                <div>Pregrado</div>
                            </div>
                            <div className="item">
                                <div className="title">Especialización en Gerencia de Proyectos</div>
                                <div>Posgrado</div>
                            </div>
                            <div className="item">
                                <div className="title">Máster en Supply Chain Management</div>
                                <div>Posgrado</div>
                            </div>
                            <div className="item">
                                <div className="title">Master in Management</div>
                                <div>Posgrado</div>
                            </div>
                            <div className="item">
                                <div className="title">Web Development Full-stack</div>
                                <div>Bootcamp</div>
                            </div>
                        </div>
                    </div>



                    <aside className="intereses">
                        <h2>Intereses personales</h2>
                        <ul className="list">
                        
                            <li><img src="./assets/viajar2.png" alt="avión viajando" />Viajar y conocer otras culturas</li>
                            
                            <li><img src="./assets/cafe.png" alt="tasa de café" />Tomar buenos cafés por el mundo</li>
                            
                            <li><img src="./assets/aprender.png" alt="libro abierto" />Aprender siempre cosas nuevas</li>
                            
                            <li><img src="./assets/mejorar.png" alt="flecha en ascenso" />Mejorar siempre</li>
                        </ul>
                    </aside>
                </section>


                <section id="contacto">
                    <h2>Contacto & redes</h2>
                    <div className="socials">
                        <a href="https://github.com/AlfonsoRG0720" target="_blank" rel="noopener"><img src="./assets/github.png" alt="logo github" /></a>
                        <a href="https://www.linkedin.com/in/alfonso-rodriguez-gallego?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener"><img src="./assets/linkedIn.png" alt="logo linkedIn" /></a>
                        <a href="https://www.instagram.com/alfonso_rg?igsh=MWJuNG5lOG1uaXRkNA==" target="_blank" rel="noopener"><img src="./assets/logo-insta.png" alt="logo instagram" /></a>
                        <a href="mailto:alfonsor814@gmail.com"><img src="./assets/gmail.png" alt="" /></a>
                        <a href="https://wa.me/34605207922" target="_blank" rel="noopener"><img src="./assets/whatsapp.png" alt="logo whatsapp" /></a>
                    </div>
                </section>

            </main>
        </div>

    </>
  );
}