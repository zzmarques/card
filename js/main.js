
const inpust = document.querySelectorAll('input');
const inputNameCard = document.getElementById('nameCard2');
const inputNumCard = document.getElementById('numCard');
const inputMes = document.getElementById('mesCard');
const inputAno = document.getElementById('anoCard');
const inputCvc = document.getElementById('cvcCard');
const numCvc = document.querySelector('.cvcCar');
const nameCard = document.getElementById('nameCard');
const numCard = document.getElementById('numberCard');
const dateCard = document.getElementById('dateCard')
const btn = document.getElementById('btn');

inpust.forEach((inpust) => {
    inpust.addEventListener('change', () => {
     const spn = document.querySelector('span');
 
         if(inpust !== '' && spn) {
             inpust.classList.remove('error');
             document.querySelector('span').remove();
         }
    })
 });


inputNameCard.addEventListener('input', () => {
    if(inputNameCard.value.length >= 27) {
        inputNameCard.value = inputNameCard.value.slice(0, 27);
    }
    nameCard.innerHTML = inputNameCard.value;
});

inputNumCard.addEventListener('input', () => {
    
    addSpace()
    if(inputNumCard.value.length >= 19) {
        inputNumCard.value = inputNumCard.value.slice(0, 19);
        
    }else if( isNaN(Number(inputNumCard.value)) ) {
        notNum(inputNumCard)
    }
    
    numCard.innerHTML = inputNumCard.value;
    
});

inputMes.addEventListener('input', () => {
    if(inputMes.value.length >= 2) {
        inputMes.value = inputMes.value.slice(0, 2);   
    }
    addData()
});

inputAno.addEventListener('input', () => {
    if(inputAno.value.length >= 2) {
        inputAno.value = inputAno.value.slice(0, 2);   
    }
    addData()
});

inputCvc.addEventListener('input', () => {
    if(inputCvc.value.length >= 3) {
        inputCvc.value = inputCvc.value.slice(0, 3)
    }else if( isNaN(Number(inputCvc.value)) ) {
        notNum(inputCvc)
    }
    numCvc.innerHTML = inputCvc.value
    
});
   

btn.addEventListener('click', (e) => {
    e.preventDefault()
    const spn = document.querySelector('span')
    if((inputNameCard.value === '') && (inputNumCard.value === '') && (inputMes.value === '') && (inputAno.value === '') && (inputCvc.value === '')) {
        valiTd()
    }else if(inputNameCard.value === ''){
        validacao(inputNameCard)
    }else if(inputNumCard.value === ''){
        validacao(inputNumCard)
    }else if(inputMes.value === ''){
        validacao(inputMes)
    }else if(inputAno.value === ''){
        validacao(inputAno)
    }else if(inputCvc.value === ''){
        validacao(inputCvc)
    }else if(spn){
        return
    }else {
        complete()
    }
});

function complete(){
    const myForm = document.forms['form'];
    const container = document.getElementById('sect');
    const complet = `
    <div id="completo">
        <img src="images/icon-complete.svg" alt="">
        <h1>OBRIGADO!</h1>
        <p>Adicionamos os detalhes do seu cartão</p>

        <button>Continuar</button>
    </div>`;
    myForm.remove();
    container.innerHTML = complet;


}

function valiTd(){
    const inpust = document.querySelectorAll('input');
    const spn = document.querySelector('span')
    const msg = document.createElement('span');
    const text = document.createTextNode('Preencha todos os campos vazios');

    if(spn){
        return
    }

    for (const input of inpust) {
        input.classList.add('error');
    }

    msg.appendChild(text);
    inputCvc.insertAdjacentElement('afterend', msg);   
}

function validacao(input) {
    const spn = document.querySelector('span')
    const msg = document.createElement('span');
    const text = document.createTextNode('campo vazio');
    if(spn){
        return
    }
    msg.appendChild(text);
    input.insertAdjacentElement('afterend', msg)
    input.classList.add('error'); 
      
}
function addSpace() {
    const cleandValue = inputNumCard.value.replace(/\s+/g, '');
    let formattedValue = ''

    for(let i = 0; i < cleandValue.length; i++) {
        formattedValue += cleandValue[i]
        if((i + 1) % 4 === 0 && i !== cleandValue.length - 1) {
            formattedValue += ' '
        }
    }

    inputNumCard.value = formattedValue
}

function addData() {
    const mes = Number(inputMes.value);
    const ano = Number(inputAno.value);
    if(!isNaN(mes) && !isNaN(ano) && mes !== '' && ano !== ''){
        const formattedData = `${mes}/${ano}`
        dateCard.innerHTML = formattedData
    }else if( isNaN(Number(inputMes.value)) ) {
        const msg = document.createElement('span');
        const text = document.createTextNode('só é permitido númeors!');
        msg.appendChild(text);
        inputMes.classList.add('error');
        inputCvc.insertAdjacentElement('afterend', msg)
    }else if( isNaN(Number(inputAno.value)) ) {
        const msg = document.createElement('span');
        const text = document.createTextNode('só é permitido númeors!');
        msg.appendChild(text);
        inputAno.classList.add('error');
        inputCvc.insertAdjacentElement('afterend', msg)
    }
}

function notNum(input) {
    const spn = document.querySelector('span')
    const msg = document.createElement('span');
    const text = document.createTextNode('só é permitido númeors!');
    if(spn){
        return
    }
    msg.appendChild(text);
    input.insertAdjacentElement('afterend', msg)
    input.classList.add('error');
}

