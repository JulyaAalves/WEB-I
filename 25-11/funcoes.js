// window.alert('Teste JS Browser')

function entradaBasica(){
    let confirmaçao=confirm('Confirma?')
    console.log(confirmaçao)
    let digitado=prompt('Digite algo')
    console.log(digitado)

}

function tipagem() {
    let a = 10;
    let b = 15.65;
    let c = true;
    let d = [];
    let e = {};
    let f = 'Jonas';
    let g = 'Augusto';
    let h = `${f} e ${g} sao primos`;
    console.log (typeof a,a);
    console.log (typeof b,b);
    console.log (typeof c,c);
    console.log (typeof d,d);
    console.log (typeof e,e);
    console.log (typeof f,f);
    console.log (typeof g,g);
    console.log (typeof h,h);

}

function variaveis() {
    let a= 10;
    console.log(typeof a,a)
    a='Novo'
    console.log(typeof a,a)

    const b = 45
    console.log(typeof b,b)
    //b=20 //gera erro
    // console.log(typeof b,b)

    const c = [1,5,9]
    console.log(typeof c,c)
    // c=[5,64,98]
    c[1]=10

    if (true) {
        var d= 45
    }
    console.log(typeof d,d)

}

function desvios() {
    if (confirm('Fugir de casa? ')){
        alert('va com deus')
    }
    else{
        alert('Fica meu filho!')
    }


}
function repeticao() {
    for (let i= 0;i <10; i++){
        console.log(i,': ',i*i)
    }
    // }
    // while (condition) {
        
    // 
    // do {
        
    // } while (condition);
    
    
}

function vetores() {
    const v1 = new Array(12,25,36,'Ana');
    console.log(v1)
    const v2 = ['Hilda', 'Antunes', 65.96,25]
    console.log(v2)
    v2.push('Novo')
    console.log(v2)

    console.log('For')
    for (let i=0;i<v2.length;i++){
        console.log(v2[i])
    }
    console.log('Forin')
    for (const index in v2){
        for (const val of v2){
            console.log(val)
        }
    
    }
    console.log('Forof')
    for (const val of v2){
        console.log(val)
    }
}

function objetos() {
    const pessoa={
        nome:'Julya',
        idade: 22,
       
    }
    console.log(pessoa)
    console.log(pessoa.nome)
    console.log(pessoa.idade)
  
      
}
function objetos2() {
    const pessoa={
        nome:'Julya',
        idade: 22,
        dependentes:[
            'Pietra',
            'Rabino',
            'Elisa'
        ]
    }
    console.log(pessoa)
    console.log(pessoa.nome)
    console.log(pessoa.idade)
    console.log('dependentes:')
    for (const dep of pessoa.dependentes){
        console.log(dep)
    }
      
}

function objetos3() {
    const pessoa={
        nome:'Julya',
        idade: 22,
        dependentes:[
            {nome:'Pietra', idade:20},
            {nome:'Rabino', idade:40},
            {nome:'Elisa', idade:12},
            
        ]
    }
    console.log(pessoa)
    console.log(pessoa.nome)
    console.log(pessoa.idade)
    console.log('dependentes:')
    for (const dep of pessoa.dependentes){
        console.log(dep.nome,'',dep.idade)
    }
      
}
function acessarElementos(){
    console.log(window);
    console.log(document);
    console.log(document.forms)
    console.log(document.images)
    console.log(document.links)

    const ls=document.getElementById('lista')
    console.log(ls)
    const bts=document.getElementsByTagName('button')
    console.log(bts)
    const h1s=document.querySelectorAll('h1')
    console.log(h1s)
    const h1s_v2=document.querySelector('h1')
    console.log(h1s_v2)
    const h1s_v3=document.querySelector('main h1')
    console.log(h1s_v3)
}
function alterarElementos(){
    const t= document.querySelector('main h1')
    t.textContent ='Alterado'
    t.style.textAlign ='Center'

    const p =document.querySelector('main p')
    p.textContent='Novo texto do paragrafo'
    p.style.border='1px solid blue'

    const im =document.querySelector('main img')
    im.src = './galo1.jpg'
}