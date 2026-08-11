const breakfastMenu = ['Pankek - $12', 'Benedict Yumurtası - $22.99', 'Yulaf Ezmesi - $21.99', 'Frittata - $15'];
const mainCourseMenu = ['Steak - $12', 'Pasta - $9', 'Burger - $5', 'Salmon - $12'];
const dessertMenu = ['Cake - $16', 'Ice Cream - $10', 'Pudding - $4', 'Fruit Salad - $12'];

 const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Öğe ${index + 1}: ${item}</p>`).join('');
        document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Öğe ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Öğe ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;

