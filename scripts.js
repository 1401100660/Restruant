// store food item, lookup price,
// display the foods to the user,
// Have a buy page, displaying the total of all
// foods to the user. 
const f = {
    "foods": {
        "beef-taco": [1.69,"This Item has wonderous kidney beans with plentliful pinto beans and wonderous kidney beans"], 
        "chicken-taco": [1.23,"This Item has cool lettuce with plentliful pinto beans and white and chedder cheese"],
        "pork-taco": [1.99, "This Item has white and chedder cheese with wonderous kidney beans and oily avocados"],
        "beef-burrito": [0.99,"This Item has cool lettuce with wonderous kidney beans and white and chedder cheese"],
        "chicken-burrito": [0.69, "This Item has plentliful pinto beans with heirloom tomato and wonderous kidney beans"],
        "pork-burrito": [1.69, "This Item has wonderous kidney beans with oily avocados and cool lettuce"]
    }
}
var menu = []



 // notes for names and descriptions
console.log(f["foods"]["beef-taco"])
function foodItem(nameoffood){
    var foodName, FoodDes = f["foods"][nameoffood]
    return foodName, FoodDes
}  
var x = 0
function store(foodname){
    let fud = 'food' + String(x)
    let mud = 'price' + String(x)
    localStorage.setItem(fud, foodname)
    localStorage.setItem(mud, foodItem(foodname)[0])
    x ++
}
function getstore(number){
    let fud = 'food' + number
    let mud = 'price' + number
    let food = localStorage.getItem(fud)
    let price = localStorage.getItem(mud)
    return [food, price]   
}