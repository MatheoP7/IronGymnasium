// validacion para "Nombre"

document.addEventListener('DOMContentLoaded', () => {
    const nameField = document.getElementById('pNombre');

    function validateName(name) {
        // Expresión regular para validar que solo contiene letras y un espacio opcional
        const namePattern = /^[A-Za-z]+(?:\s[A-Za-z]+)?$/;
        return namePattern.test(name);
    }

    nameField.addEventListener('input', (event) => {
        const value = event.target.value;
        // Validar mientras el usuario escribe
        if (!validateName(value)) {
            nameField.style.borderColor = 'red';
        } else {
            nameField.style.borderColor = '';
        }
    });

    document.getElementById('Pform').addEventListener('submit', (event) => {
        const value = nameField.value;
        if (!validateName(value)) {
            alert('Por favor, introduce un nombre válido. Solo se permiten letras y un espacio opcional.');
            event.preventDefault();
        }
    });
});


// vvalidacion para "Apellido"

document.addEventListener('DOMContentLoaded', () => {
    const lastNameField = document.getElementById('Papellido');

    function validateLastName(lastName) {
        // Expresión regular para validar que solo contiene letras y un espacio opcional
        const lastNamePattern = /^[A-Za-z]+(?:\s[A-Za-z]+)?$/;
        return lastNamePattern.test(lastName);
    }

    lastNameField.addEventListener('input', (event) => {
        const value = event.target.value;
        // Validar mientras el usuario escribe
        if (!validateLastName(value)) {
            lastNameField.style.borderColor = 'red';
        } else {
            lastNameField.style.borderColor = '';
        }
    });

    document.getElementById('Pform').addEventListener('submit', (event) => {
        const value = lastNameField.value;
        if (!validateLastName(value)) {
            alert('Por favor, introduce un apellido válido. Solo se permiten letras y un espacio opcional.');
            event.preventDefault();
        }
    });
});



// validacion para "Numero de contacto"

document.addEventListener('DOMContentLoaded', () => {
    const contactNumberField = document.getElementById('PnumeroDeContacto');

    function validateContactNumber(number) {
        // Expresión regular para validar que solo contiene números
        const numberPattern = /^[0-9]*$/;
        return numberPattern.test(number);
    }

    contactNumberField.addEventListener('input', (event) => {
        const value = event.target.value;
        // Validar mientras el usuario escribe
        if (!validateContactNumber(value)) {
            contactNumberField.style.borderColor = 'red';
        } else {
            contactNumberField.style.borderColor = '';
        }
    });

    document.getElementById('Pform').addEventListener('submit', (event) => {
        const value = contactNumberField.value;
        if (!validateContactNumber(value) || value === '') {
            alert('Por favor, introduce un número de contacto válido. Solo se permiten números.');
            event.preventDefault();
        }
    });
});



// validacion de "Correo electronico"

document.addEventListener('DOMContentLoaded', () => {
    const emailField = document.getElementById('PcorreoElectronico');

    function validateEmail(email) {
        // Expresión regular para validar formato de email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    emailField.addEventListener('input', (event) => {
        const value = event.target.value;
        // Validación visual
        if (!validateEmail(value)) {
            emailField.style.borderColor = 'red';
        } else {
            emailField.style.borderColor = '';
        }
    });

    document.getElementById('Pform').addEventListener('submit', (event) => {
        const value = emailField.value;
        if (!validateEmail(value)) {
            alert('Por favor, introduce una dirección de correo electrónico válida.');
            event.preventDefault();
        }
    });
});



// Script para el formulario de presupuesto

function calcularPresupuesto() {
    const producto = document.getElementById('producto').value;
    const plazo = document.getElementById('plazo').value;
    const extras = document.getElementById('extras').value;

    // Definir costos base
    let costoProducto = 0;
    let costoExtras = 0;


    switch (plazo) {
        case '5':
            costoPlazo = 20;
            break;
        case '30':
            costoPlazo = 50;
            break;
        case '365':
            costoPlazo = 400;
            break;
    }

    switch (producto) {
        case 'musculacion':
            costoProducto = 0;
            break;
        case 'clases':
            costoProducto = 20;
            break;
        case 'personal_trainer':
            costoProducto = 50;
            break;
    }

    switch (extras) {
        case 'nutricionista':
            costoExtras = 30;
            break;
        case 'suplementos':
            costoExtras = 60;
            break;
        case 'amigo':
            costoExtras = 10;
            break;
        case 'ninguna':
            costoExtras = 0;
            break;
    }

    const costoTotal = costoProducto + costoPlazo + costoExtras;

    document.getElementById('resultado').innerText = `El costo total del presupuesto es: $${costoTotal}`;
}

// const costoTotal = (costoProducto + parseInt(plazo)) + costoExtras;

