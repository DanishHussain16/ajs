document.getElementById('button').addEventListener('click',loaded);

function loaded(){
    // create xhr object
   const xhr=new XMLHttpRequest();

   xhr.open('GET','plain.txt',true);

   xhr.onprogress=function(){
    document.getElementById('output').innerHTML=`<h2>loading wait<h2>`;
    console.log('READYSTATE',xhr.readyState);
       
   }
   

   xhr.onload=function(){
   if(this.status===200){
       document.getElementById('output').innerHTML=`<h2>${this.responseText}<h2>`
       
    }
}
   



   xhr.send();
}