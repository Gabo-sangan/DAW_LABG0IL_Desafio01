// Solicitar datos al usuario
let nombreUsuario = prompt('Introduzca su Nombre');
let edadUsuario = prompt('Introduzca su edad');
let pesoUsuario = prompt('Introduzca su peso en kg');
let estaturaUsuario = prompt('Introduzca su estatura en cm');

// Calcular valores
let fcMax = 220 - edadUsuario; // Frecuencia Cardiaca Máxima
let imc = (pesoUsuario / Math.pow(estaturaUsuario / 100, 2)).toFixed(2); // IMC
let imcIdeal = "18.5 - 24.9"; // Rango de IMC ideal

// Estado de la frecuencia cardiaca
let FC = prompt('Introduzca su frecuencia cardíaca.');
let estadoFC = FC < 60 ? "Baja" : FC <= 100 ? "Normal" : "Alta";

// Estado del IMC
let estadoIMC = "";
if (imc < 18.5) {
    estadoIMC = "Bajo peso";
} else if (imc >= 18.5 && imc <= 24.9) {
    estadoIMC = "Normal";
} else if (imc >= 25 && imc <= 29.9) {
    estadoIMC = "Sobrepeso";
} else {
    estadoIMC = "Obesidad";
}

// Estado de la presión arterial
let presionUsuario = prompt('Ingrese su presión arterial en formato "Sistólica/Diastólica" (Ej: 120/80)');
let [sistolica, diastolica] = presionUsuario.split('/').map(Number);
let estadoPresion = "";

if (sistolica < 90 || diastolica < 60) {
    estadoPresion = "Baja";
} else if (sistolica >= 90 && sistolica <= 120 && diastolica >= 60 && diastolica <= 80) {
    estadoPresion = "Normal";
} else {
    estadoPresion = "Alta";
}

// Insertar contenido en el HTML
document.body.innerHTML = `
    <div class="container mt-4">
        <h2 class="text-center">Dashboard de Salud</h2>

        <!-- Información del Usuario -->
        <div id="datosUsuario" class="datos-usuario">
            <h4>Datos del Usuario</h4>
            <p><strong>Nombre:</strong> ${nombreUsuario}</p>
            <p><strong>Edad:</strong> ${edadUsuario}</p>
            <p><strong>Peso:</strong> ${pesoUsuario} kg</p>
            <p><strong>Estatura:</strong> ${estaturaUsuario} cm</p>
        </div>

        <div class="row">
            <!-- Frecuencia Cardiaca -->
            <div id="fcCardiaca" class="col-md-6 card-section">
                <h4>Frecuencia Cardiaca</h4>
                <p><strong>Su Frecuencia Cardiaca:</strong> ${FC}</p>
                <p><strong>Frecuencia Cardiaca Máxima (FCmax):</strong> ${fcMax}</p>
                <p><strong>Estado de la Frecuencia Cardiaca:</strong> ${estadoFC}</p>
                <img src="img/FCMAX.png" alt="Gráfico de FCMax" class="img-fluid">
            </div>

            <!-- Índice de Masa Corporal -->
            <div id="imc" class="col-md-6 card-section">
                <h4>Índice de Masa Corporal (IMC)</h4>
                <p><strong>IMC Actual:</strong> ${imc}</p>
                <p><strong>IMC Ideal:</strong> ${imcIdeal}</p>
                <p><strong>Estado Actual:</strong> ${estadoIMC}</p>
                <img src="img/IMC.png" alt="Tabla de Clasificación IMC" class="img-fluid">
            </div>
        </div>

        <!-- Presión Arterial -->
        <div id="presionArterial" class="text-center card-section">
            <h4>Presión Arterial</h4>
            <p><strong>Presión Arterial Ingresada:</strong> ${presionUsuario}</p>
            <p><strong>Estado de la Presión Arterial:</strong> ${estadoPresion}</p>
        </div>
    </div>
`;

