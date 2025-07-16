import os from 'os';

function ejemploOperatingSystem() {
    console.log('Sistema Operativo:', os.platform());
    console.log('Versión:', os.release());
    console.log('CPU:', os.cpus().length + ' núcleos');
    console.log('Memoria total (MB):', (os.totalmem() / (1024 * 1024)).toFixed(2));
    console.log('Memoria libre (MB):', (os.freemem() / (1024 * 1024)).toFixed(2));
    console.log('Tiempo activo del sistema (segundos):', os.uptime());
}

export {
    ejemploOperatingSystem
}