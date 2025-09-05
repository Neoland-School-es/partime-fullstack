export function ContactPage(params) {

    return (
        <>
            <main className="main">
                <div className="contact-container">
                {/* Hero Section */}
                <div className="contact-hero">
                    <h1 className="contact-name">David Rodríguez</h1>
                    <h2 className="contact-title">Desarrollador Full Stack</h2>
                    <div className="availability-status">
                    <span style={{
                        width: '8px',
                        height: '8px',
                        backgroundColor: '#10b981',
                        borderRadius: '50%',
                        display: 'inline-block'
                    }}></span>
                    Disponible para proyectos
                    </div>
                    <p className="contact-bio">
                    Desarrollador Full Stack con más de 1 año de experiencia autodidacta, actualmente especializándome mediante un Bootcamp FullStack en Neoland. Apasionado por crear soluciones web innovadoras y funcionales.
                    </p>
                </div>

                {/* Enlaces Profesionales */}
                <section className="professional-links">
                    <h3 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.75rem', fontWeight: '600' }}>
                    Conecta Conmigo
                    </h3>
                    <div className="links-grid">
                    <a href="https://github.com/davidrguez98" className="professional-link github-link" target="_blank" rel="noopener noreferrer">
                        <div className="link-icon">
                            <i className="bi bi-github"></i>
                        </div>
                        <div className="link-content">
                        <h4>GitHub</h4>
                        <p>davidrguez98</p>
                        <span className="link-description">Explora mis repositorios y proyectos de código</span>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/david-rodr%C3%ADguez-p%C3%A9rez-softdev/" className="professional-link linkedin-link" target="_blank" rel="noopener noreferrer">
                        <div className="link-icon">
                            <i className="bi bi-linkedin"></i>
                        </div>
                        <div className="link-content">
                        <h4>LinkedIn</h4>
                        <p>David Rodríguez Pérez</p>
                        <span className="link-description">Mi perfil profesional y red de contactos</span>
                        </div>
                    </a>

                    <a href="https://portfolio-ua1o.onrender.com/" className="professional-link portfolio-link" target="_blank" rel="noopener noreferrer">
                        <div className="link-icon">
                            <i className="bi bi-laptop"></i>
                        </div>
                        <div className="link-content">
                        <h4>Portfolio</h4>
                        <p>Sitio Web Personal</p>
                        <span className="link-description">Descubre todos mis trabajos y proyectos</span>
                        </div>
                    </a>
                    </div>
                </section>

                {/* Habilidades y Tecnologías */}
                <section className="skills-section">
                    <h3 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.75rem', fontWeight: '600' }}>
                    Tecnologías y Habilidades
                    </h3>
                    <div className="skills-grid">
                    <div className="skill-category card">
                        <div className="card-body">
                        <h4>Backend</h4>
                        <div className="skill-tags">
                            <span className="skill-tag">Python</span>
                            <span className="skill-tag">Node.js</span>
                            <span className="skill-tag">Express.js</span>
                            <span className="skill-tag">MongoDB</span>
                        </div>
                        </div>
                    </div>
                    
                    <div className="skill-category card">
                        <div className="card-body">
                        <h4>Frontend</h4>
                        <div className="skill-tags">
                            <span className="skill-tag">JavaScript</span>
                            <span className="skill-tag">React</span>
                            <span className="skill-tag">HTML5</span>
                            <span className="skill-tag">CSS3</span>
                        </div>
                        </div>
                    </div>
                    
                    <div className="skill-category card">
                        <div className="card-body">
                        <h4>Aprendiendo</h4>
                        <div className="skill-tags">
                            <span className="skill-tag">Java</span>
                            <span className="skill-tag">SQL</span>
                            <span className="skill-tag">Socket.IO</span>
                            <span className="skill-tag">Angular</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

                {/* Proyectos Destacados */}
                <section className="projects-section">
                    <h3 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.75rem', fontWeight: '600' }}>
                    Proyectos Destacados
                    </h3>
                    <div className="projects-grid">
                    <div className="project-item card">
                        <div className="card-body">
                        <div className="project-icon">☕</div>
                        <h4>Coffee Store Web App</h4>
                        <p>Aplicación web completa para gestionar una tienda de café con carrito de compras y gestión de inventario. Desarrollada con arquitectura full-stack usando Node.js y MongoDB.</p>
                        <div className="project-tech">
                            <span className="tech-badge">Node.js</span>
                            <span className="tech-badge">Express.js</span>
                            <span className="tech-badge">MongoDB</span>
                            <span className="tech-badge">JavaScript</span>
                            <span className="tech-badge">HTML/CSS</span>
                        </div>
                        </div>
                    </div>

                    <div className="project-item card">
                        <div className="card-body">
                        <div className="project-icon">🌤️</div>
                        <h4>WeatherApp</h4>
                        <p>Aplicación meteorológica que proporciona información detallada del clima para cualquier ciudad durante 7 días. Incluye datos de temperatura, probabilidad de lluvia, etc.</p>
                        <div className="project-tech">
                            <span className="tech-badge">JavaScript</span>
                            <span className="tech-badge">HTML5</span>
                            <span className="tech-badge">CSS3</span>
                            <span className="tech-badge">Python</span>
                            <span className="tech-badge">API REST</span>
                        </div>
                        </div>
                    </div>

                    <div className="project-item card">
                        <div className="card-body">
                        <div className="project-icon">🎬</div>
                        <h4>YouTube Shorts Generator</h4>
                        <p>Herramienta de automatización que genera vídeos cortos para YouTube combinando clips, audios y subtítulos. Integra NewsAPI para crear contenido basado en noticias actuales.</p>
                        <div className="project-tech">
                            <span className="tech-badge">Python</span>
                            <span className="tech-badge">Video Processing</span>
                            <span className="tech-badge">NewsAPI</span>
                            <span className="tech-badge">Automation</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

                
                </div>
            </main>
        </>
    )
}