/**
 * Es el componente que actua de cerebro del combate.
 * 
 * Gestiona la máquina de estados del turno, calcula el daño y coordina
 * la conversación, evitando que los componentes hijos se modifiquen entre sí
 * directamente.
 * 
 * El cálculo de daño lo hará haciendo uso del damageCalculator.js
 * 
 * Aparte toda la logica matemática y de turnos se sacan a un Custom Hook
 * llamado useCombatEngine.js para que este componente solo se encargue de 
 * distribuir el layout del combate y pasar props.
 */