function atualizarRelogio() {

const dia = new Date().getDay()
const hora = String(new Date().getHours()).padStart(2, '0');
const minuto = String(new Date().getMinutes()).padStart(2, '0');
const segundo = String(new Date().getSeconds()).padStart(2, '0');
const milissegundo = String(new Date().getMilliseconds()).padStart(2, '0');

const horario = `${hora}:${minuto}:${segundo}.${milissegundo}`
document.getElementById('relogio').textContent = horario;
}
atualizarRelogio();
setInterval(atualizarRelogio, 10);