// IF ELSE lESSON 19


const side1 =1
const side2 =1
const side3 =1
if(side1 === side2 && side2 ===side3){
    console.log('Equilateral Triangle')
} else if( side1 === side2 || side1 === side3){
    console.log('Isoceles Triangle')
    } else if(side1 != side2 && side2 != side3 && side3 != side1){
        console.log('Scalene Triangle')
    }
