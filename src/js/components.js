import '../css/components.css';

// import wpLogo from '../assets/img/webpack-logo.png';

export const hello = (name) => {

    console.log('Creando H1');
    const h1 = document.createElement('h1');

    h1.innerText = `Hello ${name} !!!`;
    document.body.append( h1 );

    // console.log( wpLogo );
    // const img = document.createElement('img');
    // img.src = wpLogo;
    // document.body.append( img );
}