let numeroActual: number = 1;
const turno: HTMLElement | null = document.querySelector(".numero-turno");

function actualizarTurno(): void {
  if (turno) {
    turno.textContent = numeroActual.toString().padStart(2, "0");
  }
}

function turnoSiguiente(): void {
  numeroActual++;
  actualizarTurno();
}

function turnoAnterior(): void {
  if (numeroActual > 1) {
    numeroActual--;
    actualizarTurno();
  }
}

function resetTurno(): void {
  numeroActual = 1;
  actualizarTurno();
}

const siguiente = document.getElementById("siguiente");
const anterior = document.getElementById("anterior");
const reset = document.getElementById("reset");

siguiente?.addEventListener("click", turnoSiguiente);
anterior?.addEventListener("click", turnoAnterior);
reset?.addEventListener("click", resetTurno);

actualizarTurno();


