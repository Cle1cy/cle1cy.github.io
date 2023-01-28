const btns = document.querySelectorAll('.btn');
const seccion = document.querySelectorAll('.contenedor .secciones');

const observer = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entradas => {
                if(entradas.isIntersecting){
                        const id = '#' + entradas.target.id;
                        history.pushState({},entradas.target.innetText, id);

                        btns.forEach(btns => {
                                btns.classList.remove('activo');
                                const href = btns.attributes.href.nodeValue;
                                if(href === id ) btns.classList.add('activo');
                                
                        });
                }
        });
}, {
        threshold: 1,
        rootMargin: '0px'
});
seccion.forEach(seccion => {observer.observe(seccion)});
        



