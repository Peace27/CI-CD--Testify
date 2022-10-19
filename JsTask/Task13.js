// My Library Lesson 36


const book ={
    tittle: 'Never say Never',
    description: 'A true life story',
    NumberOfPage: 20,
    authour: 'Peace Obi',
    reading: false,
    toggleReadingStatus: function(){
        if(book.reading === true){
            book.reading = false
        }else {
            book.reading = true

        }
    }
}
book.toggleReadingStatus()
console.log(book.reading)
