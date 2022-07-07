console.log('Ejemplo extra');

// Ejemplo de cambios para git

function promedio() {
    const TOTAL_ITERACIONES = 3
    let total = 0

    for (let i = 0; i < TOTAL_ITERACIONES; i++) {
        console.log('iteración ' + i);
        total = total + parseInt( prompt('Dame una calificación') )
    }

    let promedio = total / TOTAL_ITERACIONES
    alert('El promedio es: ' + promedio)
}

let comando = prompt('¿Qué opción quieres hacer? (promedio, suma, multiplicacion)')

switch ( comando ) {
    case 'promedio':
        promedio()
        break;
    case 'suma':
        alert('ejecutando la suma ... ')
        break;
    case 'multiplicacion':
        alert('ejecutando la multiplicación ... ')
        break;

    default:
        alert('Comando no válido')
        break;
}