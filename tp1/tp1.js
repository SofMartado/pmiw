//link youtube : https://youtu.be/sYR0b7sftw0?si=RQCsZfXblG7Fx65r
//Sofía Martínez Bogado.
//Legajo 119083/3.
//comisión 2.
//Profesor: Matías Jauregui Lorda.
//TP#1 — OpArt con Funciones y Ciclo For en p5-js
    
  //Declaración de variables
  
  let F_39;
  let R, G, B;
  let rellenoAzul;
  
  
    function setup() {
      createCanvas(800, 400);
    
      rellenoAzul = color(0, 0, 255);
    
      R = 0;
      G = 0;
      B = 0;
    }
    
    function preload(){
     F_39 = loadImage("data/F_39.jpg");  
    }
    
    //Funciones propias
    
    function mitaddePant ( posx,  posy) {//función que retorna
      if ( mouseX > posx && mouseY > posy ){
       return true;
      }else{
       return false;
      }
    }
     
    function LineasBlancas( v,  b,  relleno) {
      //Patrón/anidado de líneas blancas + variación de color
      for (let i = width; i > 0; i -= 3) {
    
        strokeWeight(4.5);
        stroke(R+255, G+255, B+255);
        line(400, i*3, 800, i*3);
    
        if ( mitaddePant (400, 0) ) { 
        
          for (let j = width; j > 0; j -= 3) {
    
            relleno = color(v, G, b);
    
            stroke(relleno);
            line(mouseY*i, j*3, 800, j*3);
          }
         }
        }
    }
    
    function cuadradoAzul( x,  y) {
      //Cuadrado azul
      noStroke();
      fill(rellenoAzul);
      rect(x, y, 200, 190);
    }
    
    function degradado( psx) {
      //Degradado de fondo
      for ( let f = 0; f < width; f++ ) {
        stroke(0, 0, f-15);
        line( psx+f, 5, psx+f, height-5 );
        line( psx-f, 5, psx-f, height-5 );
      }
    }
    
    function mouseMoved() {
      //Cambia el valor de color a random
      if (  mitaddePant (400, 0) ) {
    
        //le cambia a void líneasBlancas()
        R=random(255);
        G=random(255);
        B=random(255);
    
        //le cambia a void cuadradoAzul()
        rellenoAzul = color(random(250), random(250), random(255));
      }
    }
    
    function mouseIsPressed() {
      //cambia de color las lineas
      if ( mitaddePant (400, 0)) {
    
        for (let a = width; a > 0; a -= 3) {
    
          strokeWeight(4.5);
          stroke(R, G, B+255);
          line(400, a*3, 800, a*3);
        }
      }
    }
    
    function draw() {
      background(0, 0, 255);

      //Funciones
      degradado(600);
    
      cuadradoAzul(500,105);
    
      LineasBlancas(map(mouseX, 0, width, 0, 255),map(mouseY, 0, height, 0, 255),color(255));
    
    teclacolor2 ('b');
    teclacolor3 ('m');
    teclarandom4('r');
    
      //imagen op art

      image(F_39, 0, 0);
    }
  
    
    function reset() {
    
      mouseX = 400;
      mouseY = 400;
    
      rellenoAzul= color(0, 0, 255);
      
      //imagen op art

      image(F_39, 0, 0);
    }
    
    function keyPressed() {
      
    ////botón de reseteo
     
    teclareinicio (' ');
    }
