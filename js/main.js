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



function playGame(gameUrl) {
    // Создаем контейнер для игры
    var gameContainer = document.createElement("div");
    gameContainer.id = "game-container";
    gameContainer.style.position = "fixed";
    gameContainer.style.top = "0";
    gameContainer.style.left = "0";
    gameContainer.style.width = "100%";
    gameContainer.style.height = "100%";
    gameContainer.style.zIndex = "9999";
    
    // Создаем iframe для игры
    var iframe = document.createElement("iframe");
    iframe.src = gameUrl;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    
    // Создаем кнопку закрытия
    var closeButton = document.createElement("button");
    closeButton.textContent = "Закрыть";
    closeButton.style.position = "absolute";
    closeButton.style.top = "10px";
    closeButton.style.right = "10px";
    closeButton.addEventListener("click", closeGame);
    
    // Создаем кнопку переключения в полноэкранный режим
    var fullscreenButton = document.createElement("button");
    fullscreenButton.textContent = "Полный экран";
    fullscreenButton.style.position = "absolute";
    fullscreenButton.style.top = "10px";
    fullscreenButton.style.left = "10px";
    fullscreenButton.addEventListener("click", toggleFullscreen);
    
    // Добавляем элементы на страницу
    gameContainer.appendChild(closeButton);
    gameContainer.appendChild(fullscreenButton);
    gameContainer.appendChild(iframe);
    document.body.appendChild(gameContainer);
  }
  
  function closeGame() {
    var gameContainer = document.getElementById("game-container");
    gameContainer.parentNode.removeChild(gameContainer);
  }
  
  function toggleFullscreen() {
    var gameContainer = document.getElementById("game-container");
    if (gameContainer.requestFullscreen) {
      gameContainer.requestFullscreen();
    } else if (gameContainer.webkitRequestFullscreen) { /* Safari */
      gameContainer.webkitRequestFullscreen();
    } else if (gameContainer.msRequestFullscreen) { /* IE11 */
      gameContainer.msRequestFullscreen();
    }
  }


  const elements = document.querySelectorAll('.game_card_button');

elements.forEach(function(element) {
  element.addEventListener('click', function() {
    playGame('Plants vs Zombie Memories.html')
  });
});