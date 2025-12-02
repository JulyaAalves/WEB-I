function cliqueBotao01() {
    alert('Clicado')    
}

//forma intermediaria
// const bt = document.querySelector('main button')
// bt.onclick = cliqueBotao01;


//forma mais atual nativa da linguagem

const bt=document.querySelector('main button')
//bt.addEventListener('click',cliqueBotao01)
bt.addEventListener('click',(event) => {
    console.log(event)
    console.log(event.target)
    console.log(event.target.textContent)
    event.target.textContent = 'Ja clicado'
    alert('Clicando novo')
})
