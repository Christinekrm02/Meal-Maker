const menu = {
    _courses : {
        appetizers : [],
        mains: [],
        desserts: [],
    },
}; get appetizers(){
    return this._courses.appetizers;
}, 
get mains(){
    return this._courses.mains;
},
get desserts(){
    return this._courses.desserts;
},
set appetizers(appetizersDish){
    this._courses_appetizers = appetizersDish;
},
set mains(mainDish){
    this._courses_main = mainDish;
},
set desserts(dessertssDish){
    this._courses_desserts = dessertsDish;
},
get _courses(){
    return {
        appetizers : this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
    };

},
addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
        name : dishName, 
        price : dishPrice,

    };
    return {this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName){
       const dishes = this._courses[courseName];
       const randomIndex = Math.floor(Math.random()* dishes.length);
       return dishes[randomIndex];
    },
  generateRandomMeal() {
     const appetizer = this.getRandomDishFromCourse('appetizers');
     const main = this.getRandomDishFromCourse('mains');
     const dessert = this.getRandomDishFromCourse('desserts');
     const totalPrice appetizer.price + main.price + dessert.price;
     return `Your selection is ${appetizer.name}, ${main.name} and ${dessert.name} and your total price is ${totalPrice}`;
    }
};

/* recall that the .addDishtoCourse() menu.addDishToCourse(courseName, dishName, dishPrice) */

menu.addDishToCourse('appetizers', 'salad', 4.00);
menu.addDishToCourse('appetizers', 'chicken nuggets', 6.00);
menu.addDishToCourse('appetizers', 'mozarella sticks', 3.50);

menu.addDishToCourse('mains', 'steak', 12.50);
menu.addDishToCourse('mains', 'shrimp', 14.50);
menu.addDishToCourse('mains', 'chicken', 11.50);

menu.addDishToCourse('desserts', 'ice-cream', 3.00);
menu.addDishToCourse('desserts', 'chocolate cake', 2.00);
menu.addDishToCourse('desserts', 'apple pie', 4.00);

const meal1 = menu.generateRandomMeal();
console.log(meal1);