# Project 1 – Responsive Website

## Features

- Página Home, Contact y Project (estructura completa, pero no todo terminado).
- Navegación entre páginas funcional, aunque el menú móvil aún necesita mejora con JavaScript.
- Página 404 básica creada.
- Formulario de contacto con:
  - Validación de campos obligatorios.
  - Mensajes de error visuales.
  - Botón para limpiar el formulario sin necesidad de recargar.
- Uso inicial de Fetch API:
  - Implementado en el hero de `projects/1.html`.
  - Pendiente en las cards de "Recent Projects" y "Other Projects".
- Diseño responsive (Mobile First):
  - Mobile + tablet (768px).
  - Faltan dos breakpoints adicionales.
- Uso de efectos visuales simples, como transiciones en logos.
- Estructura visual basada en Flexbox.

## Configuration

- No requiere instalación.
- Solo abrir `index.html` en el navegador.

### API used

- `https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects`

### Deployment

- URL: _(pendiente de añadir)_

## Technical Specifications

### Project technologies

- HTML5
- CSS3
- JavaScript (Vanilla)

### CSS

- Enfoque Mobile First.
- Uso de Flexbox en todas las secciones.
- Uso de `position` en el hero y en la sección de testimonios.
- Media queries implementadas actualmente para `768px`.
- Uso de variables CSS (`:root`) para colores, spacing y tipografía.

### JavaScript

- Uso de Fetch API para consumir datos externos.
- Código dividido en varios archivos:
  - `contact.js`
  - `project.js`
- Validación de formulario personalizada.

### Project structure

- `/project-assets` → recursos proporcionados.
- `/projects` → páginas dinámicas, como `1.html`.
- `/js` → scripts separados por funcionalidad.
- Archivos principales en raíz:
  - `index.html`
  - `contact.html`
  - `404.html`
  - `styles.css`
  - `README.md`

### Resources used during development

- HTML desarrollado con búsquedas en Google y apuntes propios.
- CSS desarrollado con búsquedas en Google y apuntes propios.
- Durante la reorganización del HTML y CSS, se utilizó IA (Claude y ChatGPT) para revisar la estructura y corregir errores relacionados con Mobile First.
- JavaScript desarrollado con apuntes propios sobre API y apoyo de ChatGPT.
- Para redactar este README, se utilizó IA únicamente para generar preguntas y organizar la información a partir de mis respuestas (y posteriormente verificado).

## Backlog

- Completar integración de API en Home.
- Renderizar proyectos dinámicamente.
- Mejorar responsive añadiendo más breakpoints.
- Corregir layout del hero.
- Mejorar navegación móvil con JavaScript.
- Reorganizar y limpiar la estructura de carpetas.
- Mejorar la organización y claridad del CSS para cumplir mejor con los principios KISS y DRY.
