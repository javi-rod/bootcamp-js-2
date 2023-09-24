# Laboratorio Mod. 0 - GIT

1. Crear un repositorio en local

**_Inicio > Escribir Git Bash > Seleccionar Abrir_**

<img src="./imagenes/00_inicio_git_bash.png" alt="Abrir Git Bash" title="Abrir Aplicación Git Bash" />
 
Ahora, nos dirigimos al directorio donde queremos crear el repositorio y creamos la carpeta.
 
<img src="./imagenes/01_repo_local.png" alt="Crear carpeta para el repositorio local" title="Comandos para cambiar de directorio y crear carpeta para el repositorio local" />

Nos cambiamos al nuevo directorio

<img src="./imagenes/02_repo_local_dos.png" alt="Cambiar al nuevo directorio" title="Cambiar al nuevo directorio" />

Antes de inicializar el repositorio, listamos el contenido del directorio y vemos que no contiene nada Después ejecutamos el comando **git init** y luego veremos que se ha creado un directorio oculto **.git**

<img src="./imagenes/03_repo_local_tres.png" alt="Crear repositorio local" title="Crear repositorio local" />

2. Subir el repositorio a GitHub

En nuestro Dashboard de Github vamos a crear un nuevo repositorio, para ello tenemos dos formas de hacerlo.

Una forma es en **_Top Repositories_**, haciendo click en **_New_**

<img src="./imagenes/04_nuevo_repo_github.png" alt="Crear nuevo respositorio en Github" title="Crear nuevo respositorio en Github" />

La otra forma es como vemos en la imagen

<img src="./imagenes/05_nuevo_repo_github_dos.png" alt="Otra opción para crear nuevo respositorio en Github" title="Otra forma para crear nuevo respositorio en Github" />

El nombre del repositorio debe coincidir con el nombre del repositorio local. Dejamos el proyecto en público para que pueda ser corregido y hacemos clic en **_Create repository_**

<img src="./imagenes/06_crear_repo_github.png" alt="Crear nuevo repositorio" title="Crear nuevo respositorio" />

Ahora vamos a copiar la URL del repositorio creado para conectar el repositorio local.

<img src="./imagenes/07_URL_repo_github.png" alt="URL nuevo respositorio" title="URL nuevo respositorio" />

Una vez tengamos la URL copiada, haremos uso del comando **_git remote add_** seguido de un alias (origin en este caso) y la URL

<img src="./imagenes/08_conectar_repo.png" alt="Conectar respositorio local con github" title="Conectar respositorio local con github" />

Para comprobar que la conexión se estableció haremos uso del comando **_git remote -v_** el cual va a listar los repositorios remotos

<img src="./imagenes/09_verificar_conexion.png" alt="Comprobar conexión remota" title="Comprobar conexión remota" />

3. Hacer un commit y un push

Vamos a crear archivo README.md donde explicaremos los pasos seguidos y añadiremos imagenes para luego añadirlos al staging.

<img src="./imagenes/10_archivo_readme.png" alt="Archivo README.md" title="Archivo REAMDE.md" />

Si hacemos un git status primero, veremos que tenemos untrucked el archivo README.md y además el contenido del directorio imagenes que contiene las capturas de las explicaciones.

<img src="./imagenes/11_GIT_status.png" alt="git status" title="git status" />

Para añadir el fichero y el contenido del directorio al staging ejecutaremos un **_git add ._**

<img src="./imagenes/12_GIT_add.png" alt="git add ." title="git add ." />

Si hacemos, de nuevo, un **_git status_** veremos los ficheros que están listos para el commit

<img src="./imagenes/13_GIT_status.png" alt="git status" title="git status" />

Ahora vamos a realizar el commit con **_git commit -m_** y un texto descriptivo

_git commit -m “Primer commit, añadir README.txt e imagenes”_

<img src="./imagenes/14_GIT_commit.png" alt="git commit" title="git commit" />

Después del commint vamos a enviar los datos de nuestro respositorio local al remoto usando el comando **_git push_**

_git push origin master_

<img src="./imagenes/15_GIT_push.png" alt="git push" title="git push" />

Si ahora vamos al repo de Github y hacemos un F5 veremos los cambios

<img src="./imagenes/16_GIThub.png" alt="github" title="gitgub" />

4. Crear una rama

Vamos a crear un nueva rama llamada development usando el siguiente comando

_git branch development_

<img src="./imagenes/17_GIT_branch.png" alt="git branch" title="git branch" />

Para cambiarnos a esa nueva rama debemos ejecutar lo siguiente

_git checkout development_

<img src="./imagenes/18_GIT_checkout.png" alt="git checkout" title="git checkout" />

En esta nueva rama seguiremos editando el readme.txt y añadiendo imagenes pare despues hacer un commit.

En la nueva rama se añadieron nuevas imagenes que se añadieron al stagging y luego se hizo un commit

<img src="./imagenes/19_GIT_status_add_status_commit.png" alt="comandos GIT" title="comandos GIT" />

Los cambios se subieron a Github

<img src="./imagenes/20_GIT_push_origin_development.png" alt="Haciendo push de la rama development" title="Haciendo push de la rama development" />

<img src="./imagenes/21_rama_development_github.png" alt="Github rama development" title="Github rama development" />

Por último se fusionaron las ramas origin y development.

Nos cambios a la rama donde queremos hacer la fusión, en este caso master.

<img src="./imagenes/22_cambiar_rama.png" alt="rama master" title="rama master" />

Una vez en master, hacemos el merge con la rama deveploment.

<img src="./imagenes/23_merge_master_development.png" alt="merge master development" title="merge master development" />

En este caso no hubo conflictos que resolver y el merge se hizo correctamente, por lo que se procedió hacer push a Github dando por finalizado el laboratorio.

<img src="./imagenes/24_push_master_github.png" alt="git push" title="git push" />
