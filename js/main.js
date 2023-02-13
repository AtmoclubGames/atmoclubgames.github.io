function getRandom(min,max) {
 return min + Math.floor(Math.random()*max)   
}

gameCardPNG =['aaa_003.png','aaa_004.png']
gameCardJPG=['aaa_001.jpg','aaa_002.jpg','aaa_003.jpg','aaa_004.jpg','aaa_005.jpg','aaa_006.jpg','aaa_007.jpg','aaa_008.jpg']


gameCardImages =[]
gameCardJPG.forEach(element => {
    gameCardImages.push(element)
});
gameCardPNG.forEach(element => {
    gameCardImages.push(element)
});

gameCardImages.forEach(element => {
    console.log(element)
    console.log(gameCardImages.length)
});


let gameCards=document.querySelectorAll('.game_card_img')
// console.log(gameCards)

gameCards.forEach(element => {
    // element.innerText=''
    element.style.backgroundImage=`url(/images/gameCards/${gameCardImages[getRandom(0,gameCardImages.length)]})`;
});
