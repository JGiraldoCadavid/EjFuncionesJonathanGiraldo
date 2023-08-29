function verificarDia(diaSemana) {
  switch (diaSemana) {
    case 1:
      console.log("Es un día laboral");
      break;
    case 2:
      console.log("Es un día laboral");
      break;
    case 3:
      console.log("Es un día laboral");
      break;
    case 4:
      console.log("Es un día laboral");
      break;
    case 5:
      console.log("Es un día laboral");
      break;
    case 6:
      console.log("Es fin de semana");
      break;
    case 7:
      console.log("Es fin de semana");
      break;

    default:
      console.log("Valor inválido");
      break;
  }
}

verificarDia(1);
verificarDia(6);
verificarDia(3);
verificarDia(7);
verificarDia(5);