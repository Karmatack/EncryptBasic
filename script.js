document.addEventListener('DOMContentLoaded', function() {
<<<<<<< HEAD

=======
>>>>>>> 1e5d27ceb4d9b986fca9e741b8d2319db7006fdf
    const encript_Btn = document.getElementById('encript-btn');
    const desencript_Btn = document.getElementById('desencript-btn');
    const salidasDiv = document.getElementById('Salidas');

<<<<<<< HEAD
    mostrarImagenPorDefecto();

    encript_Btn.addEventListener('click', function() {
        const textoEntrada = document.querySelector('#Entradas textarea').value;
        const textoEncriptado = encriptarTexto(textoEntrada);
=======
    encript_Btn.addEventListener('click', function() {

        const textoEntrada = document.querySelector('#Entradas textarea').value;

        const textoEncriptado = encriptarTexto(textoEntrada);

>>>>>>> 1e5d27ceb4d9b986fca9e741b8d2319db7006fdf
        mostrarTextoEncriptado(textoEncriptado);
    });

    desencript_Btn.addEventListener('click', function() {
<<<<<<< HEAD
        const textoEntrada = document.querySelector('#Entradas textarea').value;
        const textoDesencriptado = desencriptarTexto(textoEntrada);
=======

        const textoEntrada = document.querySelector('#Entradas textarea').value;

        const textoDesencriptado = desencriptarTexto(textoEntrada);

>>>>>>> 1e5d27ceb4d9b986fca9e741b8d2319db7006fdf
        mostrarTextoEncriptado(textoDesencriptado);
    });

    function mostrarTextoEncriptado(texto) {
<<<<<<< HEAD
        salidasDiv.innerHTML = '';
=======

        salidasDiv.innerHTML = '';

>>>>>>> 1e5d27ceb4d9b986fca9e741b8d2319db7006fdf
        if (texto.trim() !== '') {
            const textarea = document.createElement('textarea');
            textarea.textContent = texto;
            textarea.readOnly = true;
            salidasDiv.appendChild(textarea);
<<<<<<< HEAD

            const botonCopiar = document.createElement('button');
            botonCopiar.textContent = 'Copiar';
            botonCopiar.classList.add('custom-button');
=======
        
            const botonCopiar = document.createElement('button');
            const imagenCopiar = document.createElement('img');
            imagenCopiar.src = './imagenes/btn-cp.png'; 
            imagenCopiar.alt = 'Copiar';
            botonCopiar.appendChild(imagenCopiar);
>>>>>>> 1e5d27ceb4d9b986fca9e741b8d2319db7006fdf
            botonCopiar.addEventListener('click', function() {
                textarea.select();
                document.execCommand('copy');
            });
            salidasDiv.appendChild(botonCopiar);
        } else {
<<<<<<< HEAD
            mostrarImagenPorDefecto();
        }
    }

    function mostrarImagenPorDefecto() {
        salidasDiv.innerHTML = '';
        const imagenDesktop = document.createElement('img');
        imagenDesktop.src = './imagenes/Ningun_elemento.png';
        imagenDesktop.alt = 'Ningún elemento';
        imagenDesktop.classList.add('default-image', 'default-image-desktop');
        
        const imagenMobile = document.createElement('img');
        imagenMobile.src = './imagenes/Ningun2.png';
        imagenMobile.alt = 'Ningún elemento';
        imagenMobile.classList.add('default-image', 'default-image-mobile');

        salidasDiv.appendChild(imagenDesktop);
        salidasDiv.appendChild(imagenMobile);
    }

    function encriptarTexto(texto) {

        const reglas = {
            'e': 'enter',
            'i': 'imes',
            'a': 'ai',
            'o': 'ober',
            'u': 'ufat'
        };

        let textoEncriptado = '';
        for (let i = 0; i < texto.length; i++) {
            const letra = texto[i];
            if (reglas.hasOwnProperty(letra)) {
                textoEncriptado += reglas[letra];
            } else {
                textoEncriptado += letra;
            }
        }
        return textoEncriptado;
    }

    function desencriptarTexto(textoEncriptado) {
        
        const reglas = {
            'enter': 'e',
            'imes': 'i',
            'ai': 'a',
            'ober': 'o',
            'ufat': 'u'
        };

        let textoDesencriptado = '';
        
        const palabras = textoEncriptado.split(' ');
        palabras.forEach((palabra, index) => {
            if (index > 0) textoDesencriptado += ' '; // Reponemos los espacios
            let palabraDesencriptada = '';
            let inicio = 0;
            while (inicio < palabra.length) {
                let encontrado = false;
                for (let longitud = 5; longitud >= 1; longitud--) {
                    const trozo = palabra.substr(inicio, longitud);
                    if (reglas.hasOwnProperty(trozo)) {
                        palabraDesencriptada += reglas[trozo];
                        inicio += longitud;
                        encontrado = true;
                        break;
                    }
                }
                if (!encontrado) {
                    palabraDesencriptada += palabra[inicio++];
                }
            }
            textoDesencriptado += palabraDesencriptada;
        });
        return textoDesencriptado;
=======

            const imagen = document.createElement('img');
            imagen.src = './imagenes/Ningun_elemento.png';
            imagen.alt = 'Ningún elemento';

            salidasDiv.appendChild(imagen);
            
        }
    }

    function encriptarTexto(texto) {

        return btoa(texto);
    }

    function desencriptarTexto(textoEncriptado) {

        return atob(textoEncriptado);
>>>>>>> 1e5d27ceb4d9b986fca9e741b8d2319db7006fdf
    }
});
