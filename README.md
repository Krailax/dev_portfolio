# Portafolio Web - Plantilla

## Descripción
Este es un proyecto web que sirve como plantilla para crear un portafolio personal. Cualquier persona que desee utilizarlo puede hacerlo, ya que cuenta con una licencia abierta.

## 🔗 URL para Previsualización



## Instalación y Uso

### 1. Descargar la plantilla
Clona el repositorio o descárgalo como un archivo ZIP.
```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
```

### 2. Instalar dependencias
Asegúrate de tener Node.js instalado y ejecuta:
```bash
npm install
```

### 3. Ejecutar en modo desarrollo
Para ver los cambios en vivo:
```bash
npm run dev
```

## Configuración de Datos
Para personalizar el contenido del portafolio, debes modificar los archivos JSON ubicados en la carpeta `/src/data`. Además, debes subir tus imágenes y archivos PDF a la carpeta `public/`.

### Archivos JSON a modificar

#### `src/data/home_data.json`
Contiene la información de la página de inicio.
```json
{
    "name_image": "Nombre del archivo de la imagen, por ejemplo: example.png",
    "my_speciality": "Especialidad, por ejemplo: Desarrollador Web, Cloud Developer, etc.",
    "my_name": "Tu nombre",
    "name_vitae": "Nombre del archivo PDF de tu CV, por ejemplo: vitae.pdf",
    "redes_sociales": [
        {
            "title": "LinkedIn",
            "url": "URL de tu perfil de LinkedIn"
        },
        {
            "title": "GitHub",
            "url": "URL de tu perfil de GitHub"
        }
    ]
}
```

#### `src/data/list_navigation.json`
Contiene la información de la navegación del sitio web. Si no tienes servicios o proyectos, puedes eliminar esas entradas.
```json
[
    { "title": "Inicio", "url": "/"},
    { "title": "Tecnologías", "url": "/tecnologia" },
    { "title": "Proyectos", "url": "/proyectos"},
    { "title": "Servicios", "url": "/servicios"},
    { "title": "Experiencia", "url": "/experiencia"},
    { "title": "Sobre Mí", "url": "/sobre-mi"}
]
```

#### `src/data/my_data.json`
Contiene información personal para la sección "Sobre Mí".
```json
{
    "general_description": "Breve descripción sobre ti y tu especialidad.",
    "what_I_am_looking_for": "Qué tipo de oportunidades buscas.",
    "goals": "Tus objetivos a futuro.",
    "challenges": "Un desafío que hayas enfrentado en el desarrollo.",
    "collaborations": "Tu disposición para colaborar en proyectos.",
    "community_contributions": ["Contribuciones en open-source", "Charlas en eventos de tecnología"],
    "project_types": ["Desarrollo Web", "Aplicaciones SaaS"]
}
```

#### `src/data/my_experiences.json`
Contiene la información de tu experiencia laboral o pasantías.
```json
{
    "role": "Puesto desempeñado",
    "company_name": "Nombre de la empresa",
    "description": "Descripción breve de tus responsabilidades y logros.",
    "project_duration": "Periodo trabajado, por ejemplo: Mayo 2023 - Diciembre 2023",
    "link": "Enlace al sitio web de la empresa (opcional)"
}
```

#### `src/data/my_project.json`
Contiene la información de los proyectos. Los tres primeros aparecerán en la vista principal.
```json
{
    "title_project": "Nombre del proyecto",
    "description": "Descripción breve del proyecto.",
    "list_image": [
        {
            "name_image": "Título de la imagen",
            "image": "Ruta de la imagen",
            "width": 60,
            "height": 80
        }
    ],
    "list_technologies": ["React", "Node.js", "Django"],
    "url": "URL del proyecto"
}
```

#### `src/data/my_services.json`
Contiene información sobre los servicios que ofreces.
```json
{
    "name_service": "Nombre del servicio",
    "description": "Descripción del servicio.",
    "title_image": "Título de la imagen del servicio",
    "image": "Ruta de la imagen",
    "width": 50,
    "height": 50,
    "url": "URL del servicio"
}
```

#### `src/data/my_technologies.json`
Lista las tecnologías en las que tienes experiencia.
```json
{
    "group": "Backend",
    "list_tecnologies": [
        {
            "name": "Título de la imagen",
            "img": "Ruta de la imagen",
            "experience_years": 2,
            "level": "Junior",
            "width": 50,
            "height": 50
        }
    ]
}
```

#### `src/data/technologies.json`
Lista de tecnologías utilizadas en el sitio.
```json
{
    "name": "Título de la imagen",
    "icon": "Ruta de la imagen",
    "width": 65,
    "height": 65
}
```

## Construcción y Despliegue
Una vez que hayas terminado de configurar los archivos JSON, puedes construir la aplicación con:
```bash
npm run build
```
Y luego ejecutar una previsualización:
```bash
npm run preview
```
Con esto, la aplicación estará lista para ser desplegada en el hosting de tu elección.


## Licencia
Este proyecto está bajo la **Licencia MIT**.

## 🚀 Stack Tecnológico
Este proyecto está construido con las siguientes tecnologías:

* React - Biblioteca para interfaces de usuario.
* Bun - Runtime rápido y gestor de paquetes.
* rs-build - Optimizador y empaquetador eficiente.
* Tailwind CSS - Framework de estilos utilitarios.