
/* given a list of books and a list of categories, return totols in all the categories */

const L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
const M = ["A", "B", "C", "W"] 

function stockList(listOfArt, listOfCat){
 const stock = listOfArt.map(item => item.split(' '))
 return listOfCat.map(cat => {
   let total = 0
   stock.forEach(item => {
    if(item[0].startsWith(cat)) total += (Number(item[1]))
   })
   return `(${cat} : ${total})`
 }).join(' - ')
}

console.log(stockList(L, M))

// (A : 20) - (B : 114) - (C : 50) - (W : 0)
