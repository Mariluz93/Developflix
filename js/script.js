/*
Instrucciones

1. El HTML ya tiene una estructura con la que trabajar
2. Tienes los scripts para comenzar
3. Haz que en cada sección aparezca la imagen y el título de la pelicula filtrado por el genero
4. La base de las imagenes es esta URL `https://image.tmdb.org/t/p/w500` donde añadiremos la ruta relativa que nos ofrece cada una de las películas. Debería quedar algo similar a esto: `https://image.tmdb.org/t/p/w200/qA5kPYZA7FkVvqcEfJRoOy4kpHg.jpg`
5. Viene con un diseño sencillo de base. Puedes hacerlo a tu gusto y darle más funcionalidades.

.genero()--> query selector all [1, 2]
iterar array pelis
variable de accion otra thrille y aventos pelis filtro por id
function recorrer pelis y creacion tarjetas

en html tenemos:

- 3 sections con una misma clase= "genero-container"
- cada section tiene un div con la misma clase = genero y cada uno tiene un id(1º id="genero-28"/2º id="genero-53"/3º id="genero-12")
*/

import peliculas from './peliculas.js'

const generos = document.querySelectorAll('.genero');

const accion = document.getElementById('genero-28');
const thriller = document.getElementById('genero-53');
const aventura = document.getElementById('genero-12');


function createPeliList (genre_id) {
    const categoriaPelicula = peliculas.filter(peli => peli.genre_ids.includes(genre_id))
    return categoriaPelicula.map(peli => {
        const baseImg = 'https://image.tmdb.org/t/p/w500';
        const imgCompleta = baseImg + peli.poster_path;

        return `     
            <li>
                <img src=${imgCompleta} alt=${peli.title} />
                <h3>${peli.title}</h3>
                <p>${peli.vote_average}</p>
            </li>
        `
    }).join('');
}

accion.innerHTML = createPeliList(28);
thriller.innerHTML = createPeliList(53);
aventura.innerHTML = createPeliList(12);


/*
const baseImg = 'https://image.tmdb.org/t/p/w500';
const imgCompleta = baseImg + peli.poster_path;
const img = document.createElement('img');
img.src = imgCompleta
li.appendChild(imgCompleta)*/


// accion.innerHTML = peliculas.map(peli => peli.title); esto me permite seleccionar del array solo los titulos y ponerlos en formato texto en el div cuya variable es accion
//accion.insertAdjacentHTML('afterbegin', "<ul></ul>")
/*
const img = document.createElement('img');
        img.src = imgCompleta
        li.appendChild(imgCompleta)
        const template = `

        */
/*
generos.forEach(genero => {
    const ul = document.createElement('ul');
    genero.appendChild(ul);
    const li = document.createElement('li');
    ul.appendChild(li);
    console.log(li)
})
*/