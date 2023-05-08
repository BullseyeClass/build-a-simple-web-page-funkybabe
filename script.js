const clickMe = document.querySelector('button');
const displaySlot=document.querySelector('#result');

clickMe.addEventListener('click',click)

function click(){
    alert('Hello World!')
    displaySlot.innerText='Button Clicked';
}