var imagecount =1;
var total=7;

function slide(x){
    
   var Image= document.getElementById('img');
    
    imagecount = imagecount + x ;
    
    
      if(imagecount > total){imagecount = 1 ;}
    
      if(imagecount < 1){imagecount = total ;}
    
    Image.src ="img" +imagecount + ".jpg";
    
}

