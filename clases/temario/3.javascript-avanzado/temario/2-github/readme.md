# Submódulos de Git

Uso de Git con submódulos para manejar proyectos relacionados o dividir el código en partes organizadas.

- Agregar un Submódulo:
git submodule add [--name <nombre-del-submódulo>] <repositorio> [<ruta-del-submódulo>]

- Asegúrate de que el archivo .gitmodules se haya creado correctamente. Si no, créalo manualmente con el siguiente contenido:
[submodule "nombre-del-submódulo"]
  path = ruta-del-submódulo
  url = <https://github.com/usuario/repositorio.git>

- Eliminar un Submódulo;
git submodule deinit -f ruta-del-submódulo
rm -rf .git/modules/nombre-del-submódulo
git rm -f ruta-del-submódulo

- Clonar un Proyecto con Submódulos
git clone --recurse-submodules <https://github.com/usuario/repositorio.git>

- Actualizar Submódulos
git submodule update --init --recursive
