  //funciones que retornaban que cambian a function
    
    function teclareinicio ( tecla ) {
  if ( key === tecla) {
    reset();
  }
}

function teclacolor2 (tecla2) {
  if ( key === tecla2) {
        for (let l = width; l > 0; l -= 3) {
          strokeWeight(4.5);
          stroke(0);
          line(400, l*3, 800+l, l*3);
        }
  }
}
function teclacolor3 (tecla3) {
  if ( key === tecla3 ) {
        for (let t = width; t > 0; t -= 3) {
          strokeWeight(4.5);
          stroke(0, 0, 255);
          line(400,t+t,800,t+t);
        }  
  }
}
function teclarandom4 (tecla4) {
  if ( key === tecla4 ) {
        for (let s = width; s > 0; s -= 40) {
          s = random(255);
          strokeWeight(4.5);
          stroke(0);
          line(400,s+s,800,s+s);
        }
  }
}
