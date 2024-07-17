document.addEventListener('DOMContentLoaded', function() {
    const encript_Btn = document.getElementById('encript-btn');
    const desencript_Btn = document.getElementById('desencript-btn');
    const salidasDiv = document.getElementById('Salidas');

    encript_Btn.addEventListener('click', function() {

        const textoEntrada = document.querySelector('#Entradas textarea').value;

        const textoEncriptado = encriptarTexto(textoEntrada);

        mostrarTextoEncriptado(textoEncriptado);
    });

    desencript_Btn.addEventListener('click', function() {

        const textoEntrada = document.querySelector('#Entradas textarea').value;

        const textoDesencriptado = desencriptarTexto(textoEntrada);

        mostrarTextoEncriptado(textoDesencriptado);
    });

    function mostrarTextoEncriptado(texto) {

        salidasDiv.innerHTML = '';

        if (texto.trim() !== '') {
            const textarea = document.createElement('textarea');
            textarea.textContent = texto;
            textarea.readOnly = true;
            salidasDiv.appendChild(textarea);
        
            const botonCopiar = document.createElement('button');
            const imagenCopiar = document.createElement('img');
            imagenCopiar.src = './imagenes/btn-cp.png'; 
            imagenCopiar.alt = 'Copiar';
            botonCopiar.appendChild(imagenCopiar);
            botonCopiar.addEventListener('click', function() {
                textarea.select();
                document.execCommand('copy');
            });
            salidasDiv.appendChild(botonCopiar);
        } else {

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
    }
});
