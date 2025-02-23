# H&J Virtual Academy

## Autores
- **Hicham El Farissi Ahram**
- **Juan Aznar Delgado**

## Descripción
H&J Virtual Academy es un aula virtual interactiva diseñada con un estilo simple y elegante para proporcionar un entorno de aprendizaje eficiente.

El framework CSS elegido es **Bulma**, debido a su diseño limpio y moderno. Sin embargo, se han realizado modificaciones adicionales para mejorar la personalización y adaptabilidad del proyecto.

## Objetivos del Proyecto
- Crear un aula virtual funcional y elegante.
- Explorar y utilizar **Bulma** como framework CSS.
- Implementar interactividad en la medida de lo posible.
- Garantizar una experiencia accesible y optimizada para diversos dispositivos.

## Características Implementadas
### Páginas Principales
- **Login:** Verificación para permitir acceso solo a usuarios registrados.
- **Página de Inicio:** Contiene las asignaturas del usuario con menús y audios interactivos.
- **Página de Sección:** Muestra detalles de una asignatura seleccionada, incluyendo videos, mapas, descarga de archivos y modales.
- **Página de Error:** Se muestra si el usuario intenta acceder a una asignatura sin estar matriculado.
- **Extras:** Página de ayuda y en desarrollo nuevas funcionalidades.

## Estructura del Proyecto
```plaintext
📁 HJ-Virtual-Academy
│── 📂 Audios          # Archivos de audio utilizados en la plataforma
│── 📂 html            # Archivos HTML de las diferentes páginas
│── 📂 Img             # Imágenes utilizadas en el proyecto
│── 📂 JavaScript      # Scripts para añadir funcionalidades interactivas
│── 📂 Styles          # Estilos CSS generales y específicos
│   ├── estructura.scss   # Estilos del header y footer
│   ├── styles.scss       # Estilos personalizados adicionales
```

## Tecnologías Utilizadas
- **HTML5**: Estructuración del contenido de la plataforma.
- **CSS3 y Sass**: Estilos avanzados, organización modular y mantenimiento de código optimizado.
- **Bulma**: Framework CSS basado en Flexbox.
- **JavaScript**: Funcionalidades interactivas, como gestión de audio.

## Diseño del Proyecto
El diseño inicial fue desarrollado en **Figma**, priorizando colores elegantes como negro y azul. Se realizaron ajustes para mejorar la experiencia visual sin sobrecargar la interfaz.

[Figma - Diseño Inicial](https://figma.com/design/nIU2SL1bjvj5SM1GND9U2a/Untitled?node-id=1-8&t=4NQZMtJhgR0csYDe-0)

## Optimización y Accesibilidad
- **Responsividad:** Uso de **Grid Layout** y **Flexbox** para adaptar la interfaz a distintos dispositivos.
- **Optimización de contenido multimedia:** Uso de imágenes **.PNG** y audios **.mp3**, almacenamiento en caché y minificación de archivos.
- **Accesibilidad:** Etiquetas semánticas en HTML, tamaños de fuente accesibles, atributos `alt` en imágenes y estructura clara en formularios.

## Desafíos y Soluciones
### 1. Limitaciones del Framework Bulma
- **Problema:** Falta de flexibilidad en algunos componentes.
- **Solución:** Uso de estilos personalizados y `media queries` adicionales.

### 2. Implementación de Audio
- **Problema:** Múltiples audios no se reproducían correctamente.
- **Solución:** Creación de un archivo **JavaScript** para gestionar la reproducción de todos los audios en la plataforma.

## Instalación y Uso
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/HJ-Virtual-Academy.git
   ```
2. Abrir el proyecto en un navegador o utilizar un servidor local como **Live Server** en VS Code.
3. Explorar la funcionalidad y estructura del aula virtual.
---
🚀 ¡Esperamos que disfrutes de H&J Virtual Academy! Si tienes dudas o sugerencias, no dudes en contactarnos.

