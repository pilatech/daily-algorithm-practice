/*
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
*/

function DNAStrand(dna){
 let str = ''
 for(let i = 0; i < dna.length; i++){
  let curr = dna[i]
  switch(curr){
   case 'A':
    str+= 'T'
    break;
   case 'T':
    str+='A'
    break;
   case 'G':
    str+= 'C'
    break;
   case 'C':
    str+='G'
    break;
  }
 }
 return str
}


console.log(DNAStrand('ATTGC'))

/*"ATTGC" --> "TAACG"
"GTAT" --> "CATA"*/