# Prueba Técnica – Desarrollador React.js

Descripción
El objetivo de esta prueba técnica es evaluar tus habilidades en React.js consumiendo la API pública de JSONPlaceholder, mostrando los datos en una interfaz con paginación, búsqueda y un modal con información detallada.

Requisitos

1. Consumo de API pública
• Utiliza la API de JSONPlaceholder para obtener datos de los posts desde:
👉 https://jsonplaceholder.typicode.com/posts
2. Listado de publicaciones
• Muestra los posts en una lista o tarjetas.
• Cada elemento debe incluir el título y un fragmento del text del post.
3. Paginación
• Implementa paginación para mostrar un número limitado de posts por página (por ejemplo, 10 por página).
• Permite navegar entre páginas con botones “Anterior” y “Siguiente”.
• Usa el endpoint de paginación de JSONPlaceholder:
👉 https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10
4. Búsqueda
• Agrega un campo de búsqueda que permita filtrar los posts por título en tiempo real.
5. Modal de detalles
• Al hacer clic en un post, se debe abrir un modal con la información completa del post:
• Título
• Cuerpo del post
• Nombre del autor (usa la API de usuarios para obtenerlo: [https://jsonplaceholder.typicode.com/users/{userId}](https://jsonplaceholder.typicode.com/users/%7BuserId%7D))

Requisitos Técnicos
✅ React.js con Hooks.
✅ Usar Typescript
✅ Usar SCSS
✅ Código limpio y bien organizado.

Entrega
📌 Sube el código a un repositorio en GitHub y comparte el enlace.
📌 Incluye un archivo [README.md](http://readme.md/) con instrucciones de instalación.

Criterios de Evaluación
🔹 Correcto consumo y manejo de datos de la API.
🔹 Implementación funcional de paginación, búsqueda y modal.
🔹 Buenas prácticas en React (componentización, uso de estado, efectos, etc.).
🔹 UI clara y fácil de usar.