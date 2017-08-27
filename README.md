# library-app
## :books: Admin library app :books:

:memo: Problema planteado: La biblioteca nacional tiene archivados y catalogados todos sus libros, pero todavía no han encontrado la forma de poder consultar su archivo. Nos han pedido que les ayudemos creándoles una aplicación que consuma un JSON (ver archivo) y que haga las siguientes acciones:

* Listado de libros.
* Insertar un nuevo libro.
* Editar información sobre el libro.
* Listado de personas que han accedido a un libro y también poder ver qué libros ha visto una persona en particular.
* Buscador. Los campos de búsqueda pueden ser:
    * Título
    * Autor
    * ISBIN (número de registro)
    * Género

Donde Título no es compatible con Autor ni con Género y ISBIN es incompatible con todos. :trollface:

El campo metadata de books se compone por:

    * “1” char - Siempre tendremos una “L” indicando que es un libro.
    * “17” chars - Indicando el código ISBIN.
    * “12” chars - Género, si el género no completa los 12, serán espacios en blanco.
    * “20” chars - Campo reservado.
    * “15” chars - Fecha de publicación en unix timestampt.

## :computer: Stack tecnologico empleado:
* [AngularJS](https://angularjs.org/)
* [Sass](http://sass-lang.com/)
* [Gulp](https://gulpjs.com/)
* [Karma](https://karma-runner.github.io/1.0/index.html)
* [Mocha](https://mochajs.org/")
* [Chai](http://chaijs.com/)