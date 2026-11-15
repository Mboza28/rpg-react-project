/**  
 * Este componente renderiza el menú principal del combate con las acciones:
 * Atacar, Jutsus, Mochila y Escapar
 * 
 * A su vez tendrá sub-vistas o sub-menús contextuales, es decir, si el jugador
 * pulsa en ataque que se despliegue el menu con los ataques, si pulsa en mochila
 * se transforma en una lista de objetos y un boton para volver. Si pulsa Jutsus
 * salen las técnicas y su coste de energia y boton de volver.
 * 
 * En el turno del enemigo este componente debe deshabilitarse para evitar
 * que el jugador interrumpa la ejecucion del turno enemigo (estado bloqueado).
*/