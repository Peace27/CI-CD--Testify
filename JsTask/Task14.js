//My Libarary 2 Lesson 37

const books = [{
    
    tittle: 'Learn hard',
    description: 'Action',
    numberOfpages: 20,
    author: 'Peace',
    reading: true
},
{ tittle: 'Spohia the first',
description: 'Cartoon',
numberOfpages: 15,
author: 'Sophia',
reading: true

},
{
    tittle: 'Shanny baby',
    description: 'Adventure',
    numberOfpages: 10,
    author: 'Shanny',
    reading: false 
}
]
for(let i =0; i< books.length; i++){
    if(books[i].reading === true){
        console.log(books[i]);
    }
}