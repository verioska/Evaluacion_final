# GameStore Pixel

Proyecto de Evaluacion Final Transversal para Desarrollo Frontend I. El sitio corresponde a una tienda online de videojuegos creada con HTML semantico, CSS, JavaScript, Bootstrap 5 y React.

## Funcionalidades

- Pagina principal con productos organizados en tarjetas.
- Barra de navegacion con enlaces a Inicio, Catalogo y Contacto.
- Catalogo generado dinamicamente desde un objeto JavaScript.
- Filtro por categoria.
- Formulario para agregar videojuegos usando estado de React.
- Boton para eliminar videojuegos de la lista.
- Formulario de contacto con validacion de nombre, email y mensaje.
- Diseno responsivo con Bootstrap 5, Flexbox y CSS Grid.

## Instalacion

```bash
npm install
npm run dev
```

Luego abre la URL local que indique la terminal.

## Compilar para produccion

```bash
npm run build
npm run preview
```

## Publicacion en GitHub Pages

1. Crea un repositorio en GitHub llamado `Evaluacion_final`.
2. Sube el proyecto al repositorio.
3. Ejecuta:

```bash
npm run deploy
```

4. En GitHub, entra a Settings > Pages y verifica que la rama publicada sea `gh-pages`.
5. El sitio quedara disponible en:

```text
https://verioska.github.io/Evaluacion_final/
```

Si el repositorio tiene otro nombre, cambia `homepage` en `package.json` y `base` en `vite.config.js` usando ese nombre.
