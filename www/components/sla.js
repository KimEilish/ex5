function resposta(){
  var word= document.getElementById('palavra').value;
  if(word == 'forca'){
      navigator.notification.alert('parabéns', null,'resposta certa','OK');
  }
  else{
    navigator.vibrate(1000);
    clean();
  }
}

function clean(){ 
  var sla = ['c','a','f','o','r','d','n','e','l'];
  document.getElementById('palavra').value='';

    for(letra = 0; letra <= ids.length; letra++){
    document.getElementById(ids[letra]).disabled = false;    
  }
}

function nsei(i, h){
  document.getElementById('palavra').value += h;
  document.getElementById(i).disabled = true;
  navigator.notification.beep(1);
}
