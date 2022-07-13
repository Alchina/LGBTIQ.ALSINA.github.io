function calcularRespuesta(){
    let cont=0;

    if (document.getElementById('2').checked){
        cont++;
    }
    if (document.getElementById('4').checked){
        cont++;
    }
    if (document.getElementById('9').checked){
        cont++;
    }
    if (document.getElementById('12').checked){
        cont++;
    }

    if (cont==4){
      alert(" contestaste 4/4 preguntas bien")
    }
    if (cont==3){
        alert(" contestaste 3/4 preguntas bien")
    }
    if (cont==2){
        alert(" contestaste 2/4 preguntas bien")
    }
    if (cont==1){
        alert(" contestaste 1/4 pregunta bien")
    }
    if (cont==0){
        alert(" no contestaste ninguna preguntas bien")
    }
}