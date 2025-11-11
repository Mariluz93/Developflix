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
            <div class="card">
                <img src=${imgCompleta} alt=${peli.title} />
                <h3>${peli.title}</h3>
                <p>${peli.vote_average}</p>
            </div>
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