let myImage = document.querySelector('img');
myImage.onclick=function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'a.png'){
        myImage.setAttribute('src','b.png');
    } else {
        myImage.setAttribute('src','a.png');
    }
}

let myButton =document.querySelector('button');
let myHeading=document.querySelector('h1');

function setUsername(){
    let myName=prompt("請輸入你的姓名");
    if(!myName || myName === null){
        setUsername();
    }else{
        localStorage.setItem('name',myName);
        myHeading.innerHTML='Mozilla is cool, '+myName;
    }
}
if(!localStorage.getItem('name')){
    setUsername();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML='Mozilla is cool, '+storedName;
}
myButton.onclick=function(){
    setUsername();
}