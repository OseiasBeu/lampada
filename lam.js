let off = document.querySelector('#img1');
let on = document.querySelector('#img2');
let queb = document.querySelector('#img3');
let btn = document.querySelector('#btn');
let btnOff = document.querySelector('#btnOff');
let btnQueb = document.querySelector('#btnQueb');


function ligar(){
    off.style.display = 'none'
    on.style.display = 'block'
    btnOff.style.display = 'block'
    btn.style.display = 'none'
    queb.style.display = 'none'
    btnQueb.style.display = 'none'

    
}

function desligar(){
    on.style.display = 'none'
    off.style.display = 'block'
    btnOff.style.display = 'none'
    btn.style.display = 'block'
    queb.style.display = 'none'
    btnQueb.style.display = 'none'
}

function quebrar(){
    queb.style.display = 'block'
    btnQueb.style.display = 'block'
    off.style.display = 'none'
    on.style.display = 'none'
    btnOff.style.display = 'none'
    btn.style.display = 'none'
}



btn.onclick = ligar;
btnOff.onclick = desligar;
btnQueb.onclick = desligar;
on.onclick = quebrar
off.onclick = quebrar;