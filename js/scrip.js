const btns = document.querySelectorAll('.btn');
const seccion = document.querySelectorAll('.contenedor .secciones');

let bnt1 = document.getElementById('btn1');
let bnt2 = document.getElementById('btn2');
let bnt3 = document.getElementById('btn3');
let bnt4 = document.getElementById('btn4');
let bnt5 = document.getElementById('btn5');
let casa = document.getElementById('casa');

casa.addEventListener('click', () => {location.href = '#seccion_1'});
bnt1.addEventListener('click',CambioSeccion);
bnt2.addEventListener('click',CambioSeccion);
bnt3.addEventListener('click',CambioSeccion);
bnt4.addEventListener('click',CambioSeccion);
bnt5.addEventListener('click',CambioSeccion);

function CambioSeccion(event)
{
        event.preventDefault();
        btns.forEach(btns => 
        {
                let link1 = event.target.attributes.id.nodeValue;
                let link2 = btns.attributes.id.nodeValue;
                if(link1 === link2) location.href = btns.attributes.href.nodeValue;   
        });
}

const observer = new IntersectionObserver((entradas, observador) => 
{
        entradas.forEach(entradas => 
        {

                if(entradas.isIntersecting)
                {
                        const id = '#' + entradas.target.id;
                        history.pushState({},entradas.target.innetText, id);

                        btns.forEach(btns =>
                        {
                                btns.classList.remove('activo');
                                const href = btns.attributes.href.nodeValue;
                                if(href === id ) btns.classList.add('activo'); 
                        });
                }
        });
},{
        threshold: 1,
        rootMargin: '0px'
});

seccion.forEach(seccion => {observer.observe(seccion)});

        



