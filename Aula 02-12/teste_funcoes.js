function funcao1(par1,par2) {
    const s = par1 + par2
    console.log(s)
    
}
const f2 =function funcao2() {
    console.log ('Funcao 2')
    
}
const f3 = function(){
    console.log('Funçao 3')
}

const f4 = () => {
    console.log('Funçao 4')
}

const f5 = (n) => 2 * n;

const f6 = n => 2 * 3

funcao1(10,20);
f2();
f3();
f4();
console.log(f5(15));
console.log(f6(14));

function executora(fun) {
    fun();
    
}

function funcao7() {
    console.log('funcao 7')

}
executora(funcao7)

const f8 = function(){
    console.log('funcao 08')
}
executora(f8)

const f9 = () => {
    console.log('funçao 9')
}
executora(f9)
executora(function(){
    console.log('funçao 10')
});
executora(()=>{
    console.log('funçao 11')
})