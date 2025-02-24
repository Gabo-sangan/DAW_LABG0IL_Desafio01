// Variables
let nombreUsuario = prompt('Introduzca su Nombre');
let edadUsuario = prompt('Introduzca su edad');
let pesoUsuario = prompt('Introduzca su peso en kg');
let estaturaUsuario = prompt('Introduzca su estatura en cm');

// Operacioónes
let fcMax = 220 - edadUsuario; // FCMax
let imc = (pesoUsuario / Math.pow(estaturaUsuario / 100, 2)).toFixed(2); // IMC
let imcIdeal = "18.5 - 24.9"; // Rango IMC ideal

// Estado de la frecuencia cardiaca
let estadoFC = fcMax < 120 ? "Baja" : fcMax < 180 ? "Normal" : "Alta";

// Estado del IMC
let estadoIMC = '';
if (imc < 18.5) {
    estadoIMC = "Bajo peso";
} else if (imc >= 18.5 && imc <= 24.9) {
    estadoIMC = "Normal";
} else if (imc >= 25 && imc <= 29.9) {
    estadoIMC = "Sobrepeso";
} else {
    estadoIMC = "Obesidad";
}

// Estado presión arterial
let estadoPresion = "Normal";

// HTML
document.body.innerHTML = `
    <div class="container mt-4">
        <h2>Dashboard de Salud</h2>

        <!-- Información del Usuario -->
        <div id="datosUsuario" class="mb-4">
            <h4>Datos del Usuario</h4>
            <p><strong>Nombre:</strong> ${nombreUsuario}</p>
            <p><strong>Edad:</strong> ${edadUsuario}</p>
            <p><strong>Peso:</strong> ${pesoUsuario} kg</p>
            <p><strong>Estatura:</strong> ${estaturaUsuario} cm</p>
        </div>

        <!-- Frecuencia Cardiaca -->
        <div id="fcCardiaca" class="mb-4">
            <h4>Frecuencia Cardiaca</h4>
            <p><strong>Frecuencia Cardiaca Máxima (FCmax):</strong> ${fcMax}</p>
            <p><strong>Estado de la Frecuencia Cardiaca Actual:</strong> ${estadoFC}</p>
            <img src="img/FCMAX.png" alt="Gráfico de FCMax" class="img-fluid">
        </div>

        <!-- Índice de Masa Corporal -->
        <div id="imc" class="mb-4">
            <h4>Índice de Masa Corporal (IMC)</h4>
            <p><strong>IMC Ideal:</strong> ${imcIdeal}</p>
            <p><strong>Estado Actual de su IMC:</strong> ${estadoIMC}</p>
            <img src="img/IMC.png" alt="Tabla de Clasificación IMC" class="img-fluid">
        </div>

        <!-- Presión Arterial -->
        <div id="presionArterial" class="mb-4">
            <h4>Presión Arterial</h4>
            <p><strong>Estado de la Presión Arterial Actual:</strong> ${estadoPresion}</p>
        </div>

        <!-- Tabla de valores -->
        <div id="tablaValores">
            <h4>Tabla de Valores de FC</h4>
            <table class="table table-bordered" id="tablaFC">
                <!-- La tabla será llenada por JavaScript -->
            </table>
        </div>

        <div id="tablaIMC">
            <h4>Tabla de Clasificación IMC</h4>
            <table class="table table-bordered" id="tablaIMCValues">
                <!-- La tabla será llenada por JavaScript -->
            </table>
        </div>
    </div>
`;

// Función para llenar la tabla de valores FC
function crearTablaFC() {
    let tablaFC = document.getElementById('tablaFC');
    let tablaHTML = `
        <thead>
            <tr>
                <th>Edad</th>
                <th>FC Máxima</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${edadUsuario}</td>
                <td>${fcMax}</td>
            </tr>
        </tbody>
    `;
    tablaFC.innerHTML = tablaHTML;
}

function crearTablaIMC() {
    let tablaIMCValues = document.getElementById('tablaIMCValues');
    let tablaHTML = `
        <thead>
            <tr>
                <th>Rango IMC</th>
                <th>Clasificación</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${imcIdeal}</td>
                <td>${estadoIMC}</td>
            </tr>
        </tbody>
    `;
    tablaIMCValues.innerHTML = tablaHTML;
}

crearTablaFC();
crearTablaIMC();
