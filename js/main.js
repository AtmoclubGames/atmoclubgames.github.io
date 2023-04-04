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
    closeButton.textContent = "X";
    closeButton.style.fontWeight = 'bold';
    closeButton.style.width ='42px'
    closeButton.style.height='38px';
    closeButton.style.position = "absolute";
    closeButton.style.top = "10px";
    closeButton.style.right = "10px";
    closeButton.style.cursor = 'pointer';
    closeButton.style.color = '#000';
    closeButton.style.backgroundColor = '#FF05AF';
    closeButton.style.boxShadow='2px 3px 0px #000000'
    closeButton.style.border = '3px solid #000000';
    closeButton.style.borderRadius = '8px';
    closeButton.style.marginRight = '32px';
    closeButton.addEventListener("click", closeGame);

    // color: #fff;
    // float: right;
    // font-size: 28px;
    // font-weight: bold;
    // cursor: pointer;
    // margin-right: 20px;
//     width: 42px;
// height: 38px;

// background: #FF05AF;
// border: 3px solid #000000;
// box-shadow: 2px 3px 0px #000000;
// border-radius: 8px;
    
    // Создаем кнопку переключения в полноэкранный режим
    var fullscreenButton = document.createElement("button");
    fullscreenButton.textContent = "Полный экран";
    fullscreenButton.style.position = "absolute";
    fullscreenButton.style.fontWeight = 'bold';
    fullscreenButton.style.width ='152px'
    fullscreenButton.style.height='38px';
    fullscreenButton.style.top = "10px";
    fullscreenButton.style.left = "10px";
    fullscreenButton.style.cursor = 'pointer';
    fullscreenButton.style.color = '##6500B6';
    fullscreenButton.style.backgroundColor = '#FBD800';
    fullscreenButton.style.boxShadow='2px 3px 0px #000000'
    fullscreenButton.style.border = '3px solid #000000';
    fullscreenButton.style.borderRadius = '8px';
    fullscreenButton.style.marginLeft = '32px';
    fullscreenButton.style.borderRadius = '4px';
    fullscreenButton.addEventListener("click", toggleFullscreen);
    

//     width: 152px;
// height: 38px;

// background: #FBD800;
    // position: fixed;
    // z-index: 99999;
    // top: 0;
    // left: 0;
    // right: 0;
    // bottom: 0;
    // margin: 0;
    // padding: 0;
    // overflow: auto;
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

