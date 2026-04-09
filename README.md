# Project 1 – Responsive Website

## Features

- Página Home, Contact y Project (estructura completa, pero no todo terminado).
- Navegación entre páginas funcional, aunque el menú móvil aún necesita mejora con JavaScript.
- Página 404 básica creada (imagen modificada con generative fill).
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
- Uso de efectos visuales simples:
  - Transiciones en logos (`transition`).
- Estructura visual basada en Flexbox (no se ha usado Grid).

---

## Configuration

- No requiere instalación.
- Solo abrir `index.html` en el navegador.

### API usada

- https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects

### Deployment

- URL: _(pendiente de añadir)_

---

## Technical Specifications

### Tecnologías

- HTML5
- CSS3
- JavaScript (Vanilla)

### CSS

- Enfoque Mobile First (corregido tras detectar errores iniciales).
- Uso de:
  - Flexbox en todas las secciones.
  - Position en hero y testimonios.
  - Media queries (actualmente solo 768px).
- Uso de variables CSS (`:root`) para colores, spacing y tipografía.

### JavaScript

- Uso de Fetch API para consumir datos externos.
- Código dividido en varios archivos:
  - `contact.js`
  - `project.js`
- Validación de formulario personalizada.

### Estructura del proyecto

- `/project-assets` → recursos (según el profesor).
- `/projects` → páginas dinámicas (ej: `1.html`).
- `/js` → scripts separados por funcionalidad.
- Archivos principales en raíz:
  - `index.html`
  - `contact.html`
  - `styles.css`

### Nota sobre el README

- Para redactar este README, se utilizó IA únicamente para generar preguntas sobre el proyecto y organizar la información. El contenido ha sido redactado a partir de mis propias respuestas.

---

## Backlog

- Completar integración de API en Home.
- Renderizar proyectos dinámicamente.
- Mejorar responsive (añadir más breakpoints).
- Corregir layout del hero.
- Mejorar navegación móvil con JavaScript.
- Reorganizar y limpiar la estructura de carpetas.
- Mejorar la organización y claridad del CSS para cumplir mejor con los principios KISS y DRY.
