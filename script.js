let images = [

"images/iw8-1.png",

"images/lumen-1.png",

"images/iw8-2.png",

"images/lumen-2.png"

];


let index = 0;


setInterval(()=>{


let slide=document.getElementById("slide");


if(slide){

index++;


if(index >= images.length){

index=0;

}


slide.src=images[index];


}


},4000);





function copyCommand(id){


let text=document.getElementById(id);


text.select();


navigator.clipboard.writeText(text.value);


alert("Copied!");

}
