var gameGenres=['Экшен','Аркады','Ролевые игры','Шутеры',"Стратегии","Гонки","Симуляторы","Викторины"]
let menuItems=['Все игры',gameGenres]
for (let index = 0; index < menuItems.length; index++) {
    if (index==0) {
      const element = menuItems[index];
        console.log(element)
    }
    else{
        for(let i=0;i<menuItems[1].length;i++){
            const element = menuItems[1][i]
            console.log(element)
        }
        
    }
  
    
}
