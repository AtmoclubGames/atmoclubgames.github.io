new Vue({
    el: '#app',
    methods: {
        startGame() {
            // Добавьте здесь логику перехода к следующему экрану игры
            alert('Игра начнется!');
        }
    }
});
// new Vue({
//     el: '#category-selection',
//     methods: {
//         selectCategory(category) {
//             // Добавьте здесь логику перехода к вопросам выбранной категории
//             alert(`Выбрана категория: ${category}`);
//         }
//     }
// });
new Vue({
    el: '#app',
    data: {
        showCategories: false
    },
    methods: {
        startGame() {
            // Добавьте здесь логику перехода к выбору категорий
            this.showCategories = true; // Показываем категории после нажатия "Играть"
        },
        selectCategory(category) {
            // Добавьте здесь логику перехода к вопросам выбранной категории
            alert(`Выбрана категория: ${category}`);
        }
    }
});