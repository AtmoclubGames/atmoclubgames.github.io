gameCardPNG =['aaa003.png','aaa004.png']
gameCardJPG=['aaa001.jpg','aaa002.jpg','aaa003.jpg','aaa004.jpg','aaa005.jpg','aaa006.jpg','aaa007.jpg','aaa008.jpg']


gameCardImages =[]
gameCardJPG.forEach(element => {
    gameCardImages.push(element)
});
gameCardPNG.forEach(element => {
    gameCardImages.push(element)
});

gameCardImages.forEach(element => {
    console.log(element)
});
let gameCards=document.querySelectorAll('.game_card_img')
console.log(gameCards)

