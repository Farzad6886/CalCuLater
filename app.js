let btns=document.querySelectorAll('#number');
let text=document.querySelector('#txt');
let log=document.querySelector('#log');
let abs=document.querySelector('#abs');
let lo=document.querySelector('#lo');
let rad=document.querySelector('#rad');
let power=document.querySelector('#power');
let sin=document.querySelector('#sin');
let cos=document.querySelector('#cos');

btns.forEach(element => {
    element.addEventListener("click" , function(){
       text.value+=element.innerHTML;
    });
});

document.querySelector('#clear').addEventListener("click" , function(){
    text.value="";
});

document.querySelector('#equal').addEventListener("click" , function(){
    if(text.value==""){
        text.value="Please Enter The Numbers";
    }
    else{
        let result=eval(text.value);
        text.value="";
        text.value=result;
    }
});

window.addEventListener("load" , function(){
   text.value="";
});

log.addEventListener("click" , function(){
     let logaritm=Math.log10(text.value);
     text.value="";
     text.value=logaritm;
});

abs.addEventListener("click" , function(){
    let absoult=Math.abs(text.value);
    text.value="";
    text.value=absoult;
});

lo.addEventListener("click" , function(){
    text.value+=lo.innerHTML;
});

rad.addEventListener("click" , function(){
    let radical=Math.sqrt(text.value);
    text.value="";
    text.value=radical;
});

power.addEventListener("click" , function(){
     text.value+=power.innerHTML;
     
});

sin.addEventListener("click" , function(){
    let sinus=Math.sin(text.value*Math.PI/180);
    text.value="";
    text.value=sinus;
});

cos.addEventListener("click" , function(){
    let cosinus=Math.cos(text.value*Math.PI/180);
    if(text.value=="90"){
        cosinus=0;
    }
    text.value="";
    text.value=cosinus;
});



setInterval(image , 15000);

function image(){
   document.body.style.backgroundImage="url(images.jpg)";
   document.body.style.backgroundRepeat="no repeat";
   document.body.style.backgroundSize="100%";
   setTimeout(image2 , 15000);
   function image2(){
    document.body.style.backgroundImage="url(images2.jpg)";
    document.body.style.backgroundRepeat="no repeat";
    document.body.style.backgroundSize="100%";
    setInterval(image3 , 15000);
    function image3(){
        document.body.style.backgroundImage="url(index.jpg)";
        document.body.style.backgroundRepeat="no repeat";
        document.body.style.backgroundSize="100%";
        
setInterval(image , 15000);
    }
   }
}

