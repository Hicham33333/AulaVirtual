window.addEventListener('DOMContentLoaded', (event) => {
    // Intentamos obtener los estilos desde el localStorage
    const storedStyles = localStorage.getItem('customStyles');
    
    // Si hay estilos almacenados en el localStorage, los aplicamos
    if (storedStyles) {
        // Si encontramos estilos almacenados, los aplicamos al :root
        const style = document.createElement('style');
        style.innerHTML = storedStyles;
        document.head.appendChild(style);
    } else {
        // Si no hay estilos almacenados, usamos los valores predeterminados
        const defaultStyles = `
            :root {
  --bulma-primary-h: 24deg;
  --bulma-primary-s: 53%;
  --bulma-primary-l: 28%;
  --bulma-link-h: 108deg;
  --bulma-info-h: 65deg;
  --bulma-success-h: 229deg;
  --bulma-warning-h: 292deg;
  --bulma-danger-h: 359deg;
  --bulma-danger-l: 46%;
}


        `;
        const style = document.createElement('style');
        style.innerHTML = defaultStyles;
        document.head.appendChild(style);
        
        // Guardamos estos estilos en el localStorage
        localStorage.setItem('customStyles', defaultStyles);
    }
});
