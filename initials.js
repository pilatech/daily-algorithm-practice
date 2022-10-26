function abbrevName(name){
 const fullName = name.split(' ')
return (fullName[0][0] + '.' + fullName[1][0]).toLocaleUpperCase()
}

console.log(abbrevName('Pilate Chinyengetere'))