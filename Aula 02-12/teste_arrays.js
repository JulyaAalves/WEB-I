function testeArray() {
    const v = ['Laranja','Banana', 'Pera']
    console.table(v)
    v.push('UVA','Melancia')
    console.table(v);
    const r=v.pop()
    console.log('Removido: ',r)
    console.table(v)
    v.unshift('Pitanga', 'Melao', 'Morango')
    console.table(v)
    const ri=v.shift();
    console.log('Removido: ',ri)
    console.table(v)

    v[2]='Limao'
    console.table(v)
    
    // v.splice(3,1)
    v.splice(3,1,'Abacaxi','Cagaita')
    console.table(v);

    v.forEach((v,i) => {
        //console.log(i+ ': '+ v)
        console.log(`${i}: ${v}`)
    })
const v2 = v.map ((v,i) => {
    return 'fruta' + i + " - "+ v;
});
console.table(v2)
}


testeArray()