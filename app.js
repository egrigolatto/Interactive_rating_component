const contenedor_uno = document.querySelector('.contenedor_uno');
const contenedor_dos = document.querySelector('.contenedor_dos');
const boton = document.getElementById('btn');
const opciones = document.querySelectorAll('.circulo');
const eleccion = document.querySelector('.eleccion');

for(let i = 0; i < opciones.length ; i++){

    opciones[i].addEventListener('click', () => {

        let opcion = opciones[i].innerHTML;

        for(let i = 0; i < opciones.length ; i++) {
            opciones[i].classList.remove('seleccion');
        }

        opciones[i].classList.add('seleccion');
 
        boton.addEventListener('click', () => {
            contenedor_uno.style.display = 'none';
            contenedor_dos.style.display = 'flex'
            eleccion.innerHTML = opcion
        })
   })

}

