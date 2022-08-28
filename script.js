var title = document.getElementById("product-title").innerText;
var price = document.getElementById("product-price").innerText;
console.log(title);

 // ZOOM
var bigImg=document.getElementById("big-image");
var subImg=document.getElementById("sub").getElementsByTagName('img');
for (var i =0; i<subImg.length; i++){
   subImg[i].addEventListener('mouseenter', full_img);
   subImg[i].addEventListener('onclick', full_img);

}

function full_img(){
   var imgSrc= this.getAttribute('src');
   bigImg.innerHTML=`<img src ="${imgSrc}">`
   //console.log(imgSrc);

}

var bigImg1=document.getElementById("big-image1");
var subImg1=document.getElementById("sub1").getElementsByTagName('img');
for (var i =0; i<subImg1.length; i++){
   subImg1[i].addEventListener('click', full_img1);

}

function full_img1(){
   var imgSrc1= this.getAttribute('src');
   bigImg1.innerHTML=`<img src ="${imgSrc1}">`
  //console.log(imgSrc1);

}


var bigImg2=document.getElementById("big-image2");
var subImg2=document.getElementById("sub2").getElementsByTagName('img');
for (var i =0; i<subImg2.length; i++){
   subImg2[i].addEventListener('click', full_img2);

}

function full_img2(){
   var imgSrc2= this.getAttribute('src');
   bigImg2.innerHTML=`<img src ="${imgSrc2}">`
  //console.log(imgSrc2);

}




var bigImgSticky=document.getElementById("big-image-sticky");
var subImg=document.getElementById("sub").getElementsByTagName('img');
for (var i =0; i<subImg.length; i++){
   subImg[i].addEventListener('mouseenter', full_img_sticky);
   subImg[i].addEventListener('onclick', full_img_sticky);

}

function full_img_sticky(){
   var imgSrcSticky= this.getAttribute('src');
   bigImgSticky.innerHTML=`<img src ="${imgSrcSticky}">`
   //console.log(imgSrc);

}


// dropdown change color active-pasive class

function toogleClass(el){
   if(el.className=="pasiv-dropdown"){
      el.className="active-dropdown"
   } else{
      el.className="pasiv-dropdown"

   }
}

 
 //CLOSE DROPDOWN
 const toggleBtn=document.querySelector('#toggleBtn');
 const radio = document.querySelector('.radio');
 toggleBtn.addEventListener('click',()=>{
  if(radio.style.display==='none'){
   radio.style.display='block';
  }
  else{
   radio.style.display='none';
  }


 }) 
 

 const toggleBtn1=document.querySelector('#toggleBtn1');
 const radio1 = document.querySelector('.radio1');
 toggleBtn1.addEventListener('click',()=>{
  if(radio1.style.display==='none'){
   radio1.style.display='block';
  }
  else{
   radio1.style.display='none';
  }


 }) 
 


 






 
let newElement = document.createElement('div');
newElement.className="product-price";
newElement.innerText=`Total:
${price}`;
document.querySelector('.dynamicInfo').appendChild(newElement);

let newElementInkl = document.createElement('div');

newElementInkl.className="inkl";
newElementInkl.innerText=`Inkl. 19% MwSt.
Lieferzeit: 6 bis 7 Wochen;`
 
 document.querySelector('.dynamicInfo').appendChild(newElementInkl);

 //counter
 let count  = 0 ;
 document.getElementById("decreaseBtn").onclick=function(){
count -=1;
document.getElementById('countLabel').innerHTML=count;
 }

 document.getElementById("countLabel").onclick=function(){

}

document.getElementById("increaseBtn").onclick=function(){
   count ++;
   document.getElementById('countLabel').innerHTML=count;

}

document.getElementById("addToCart").onclick=function(){
 alert("IN DEN WARENKORB")
 
}
document.getElementById("btn-paypall").onclick=function(){
   alert("PAYPAL")
   
  }
  


/* let productDescription = document.createElement('divMasse');
productDescription.className="divMasse";
productDescription.innerText=`divMasse Image`
document.querySelector('.productMasseDiv').appendChild(productDescription);
  */
 function myFunction(){
   document.getElementById("myDropdown").classList.toggle("show");
    
 }
 window.onclick=function(event){
   if(!event.target.matches('.dropbtn')){
      var dropdowns = document.getElementsByClassName('dropown-content');
      var i;
      for(i=0; i<dropdowns.length;i++){
         var openDropdown = dropdowns[i];
         if(openDropdown = classList.contains('show')){
            openDropdown.classList.remove('show');
         }
            
            
      }
   }
 }





 const newProduct=document.querySelector('#newProduct');
 const imageOnHover = document.querySelector('.divimageOnHover');
 newProduct.addEventListener('mouseleave',()=>{
   imageOnHover.style.display='none';
 })

 newProduct.addEventListener('mouseenter',()=>{
  if(imageOnHover.style.display==='none'){
   imageOnHover.style.display='block';
  }
  else{
   imageOnHover.style.display='none';
  }
})

 
 