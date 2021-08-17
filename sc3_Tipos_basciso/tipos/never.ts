(() => {
  // never no es undefined ni void never es never
  // no tiene que tener un punto de retorno la funcion acabar en error
  const error = (message: string): never => {
    throw new Error(message);
  };

  error("hola");
})();
