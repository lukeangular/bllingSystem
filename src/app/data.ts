const food_data = [
    {
        "id": 1,
        "name": "Crispy Spring Rolls",
        "price": 8.99,
        "category": "appetizers",
        "image": "https://example.com/images/crispy_spring_rolls.jpg"
    },
    {
        "id": 2,
        "name": "Margherita Pizza",
        "price": 12.99,
        "category": "maincourse",
        "image": "https://example.com/images/margherita_pizza.jpg"
    },
    {
        "id": 3,
        "name": "Iced Lemon Tea",
        "price": 3.49,
        "category": "beverage",
        "image": "https://example.com/images/iced_lemon_tea.jpg"
    },
    {
        "id": 4,
        "name": "Spaghetti Carbonara",
        "price": 14.99,
        "category": "maincourse",
        "image": "https://example.com/images/spaghetti_carbonara.jpg"
    },
    {
        "id": 5,
        "name": "Chicken Tenders",
        "price": 9.99,
        "category": "appetizers",
        "image": "https://example.com/images/chicken_tenders.jpg"
    },
    {
        "id": 6,
        "name": "Vegetable Stir-Fry",
        "price": 11.49,
        "category": "maincourse",
        "image": "https://example.com/images/vegetable_stir_fry.jpg"
    },
    {
        "id": 7,
        "name": "Chocolate Cake",
        "price": 6.99,
        "category": "desserts",
        "image": "https://example.com/images/chocolate_cake.jpg"
    },
    {
        "id": 8,
        "name": "Cheeseburger",
        "price": 7.99,
        "category": "maincourse",
        "image": "https://example.com/images/cheeseburger.jpg"
    },
    {
        "id": 9,
        "name": "Mango Smoothie",
        "price": 4.49,
        "category": "beverage",
        "image": "https://example.com/images/mango_smoothie.jpg"
    },
    {
        "id": 10,
        "name": "Caesar Salad",
        "price": 9.49,
        "category": "appetizers",
        "image": "https://example.com/images/caesar_salad.jpg"
    },
    {
        "id": 11,
        "name": "Pepperoni Pizza",
        "price": 13.99,
        "category": "maincourse",
        "image": "https://example.com/images/pepperoni_pizza.jpg"
    },
    {
        "id": 12,
        "name": "Fried Rice",
        "price": 10.49,
        "category": "maincourse",
        "image": "https://example.com/images/fried_rice.jpg"
    },
    {
        "id": 13,
        "name": "Strawberry Shortcake",
        "price": 5.99,
        "category": "desserts",
        "image": "https://example.com/images/strawberry_shortcake.jpg"
    },
    {
        "id": 14,
        "name": "Fish Tacos",
        "price": 11.99,
        "category": "maincourse",
        "image": "https://example.com/images/fish_tacos.jpg"
    },
    {
        "id": 15,
        "name": "Hot Wings",
        "price": 8.49,
        "category": "appetizers",
        "image": "https://example.com/images/hot_wings.jpg"
    },
    {
        "id": 16,
        "name": "Beef Burrito",
        "price": 10.99,
        "category": "maincourse",
        "image": "https://example.com/images/beef_burrito.jpg"
    },
    {
        "id": 17,
        "name": "Veggie Burger",
        "price": 9.49,
        "category": "maincourse",
        "image": "https://example.com/images/veggie_burger.jpg"
    },
    {
        "id": 18,
        "name": "Mojito",
        "price": 6.99,
        "category": "beverage",
        "image": "https://example.com/images/mojito.jpg"
    },
    {
        "id": 19,
        "name": "Greek Salad",
        "price": 10.49,
        "category": "appetizers",
        "image": "https://example.com/images/greek_salad.jpg"
    },
    {
        "id": 20,
        "name": "Sushi Roll",
        "price": 13.99,
        "category": "maincourse",
        "image": "https://example.com/images/sushi_roll.jpg"
    },
    {
        "id": 21,
        "name": "Fried Chicken",
        "price": 11.99,
        "category": "maincourse",
        "image": "https://example.com/images/fried_chicken.jpg"
    },
    {
        "id": 22,
        "name": "Pad Thai",
        "price": 10.99,
        "category": "maincourse",
        "image": "https://example.com/images/pad_thai.jpg"
    },
    {
        "id": 23,
        "name": "Blueberry Pancakes",
        "price": 7.49,
        "category": "breakfast",
        "image": "https://example.com/images/blueberry_pancakes.jpg"
    },
    {
        "id": 24,
        "name": "Steak Sandwich",
        "price": 12.99,
        "category": "maincourse",
        "image": "https://example.com/images/steak_sandwich.jpg"
    },
    {
        "id": 25,
        "name": "Orange Juice",
        "price": 2.99,
        "category": "beverage",
        "image": "https://example.com/images/orange_juice.jpg"
    },
    {
        "id": 26,
        "name": "Nachos",
        "price": 8.49,
        "category": "appetizers",
        "image": "https://example.com/images/nachos.jpg"
    },
    {
        "id": 27,
        "name": "Chicken Alfredo",
        "price": 12.49,
        "category": "maincourse",
        "image": "https://example.com/images/chicken_alfredo.jpg"
    },
    {
        "id": 28,
        "name": "Pineapple Fried Rice",
        "price": 11.99,
        "category": "maincourse",
        "image": "https://example.com/images/pineapple_fried_rice.jpg"
    },
    {
        "id": 29,
        "name": "Lemonade",
        "price": 3.99,
        "category": "beverage",
        "image": "https://example.com/images/lemonade.jpg"
    },
    {
        "id": 30,
        "name": "Shrimp Scampi",
        "price": 14.99,
        "category": "maincourse",
        "image": "https://example.com/images/shrimp_scampi.jpg"
    },
    {
        "id": 31,
        "name": "Bacon Cheese Fries",
        "price": 7.99,
        "category": "appetizers",
        "image": "https://example.com/images/bacon_cheese_fries.jpg"
    },
    {
        "id": 32,
        "name": "Beef Stew",
        "price": 12.49,
        "category": "maincourse",
        "image": "https://example.com/images/beef_stew.jpg"
    },
    {
        "id": 33,
        "name": "Iced Coffee",
        "price": 4.49,
        "category": "beverage",
        "image": "https://example.com/images/iced_coffee.jpg"
    },
    {
        "id": 34,
        "name": "Caprese Salad",
        "price": 9.49,
        "category": "appetizers",
        "image": "https://example.com/images/caprese_salad.jpg"
    },
    {
        "id": 35,
        "name": "California Roll",
        "price": 13.99,
        "category": "maincourse",
        "image": "https://example.com/images/california_roll.jpg"
    },
    {
        "id": 36,
        "name": "BBQ Ribs",
        "price": 15.99,
        "category": "maincourse",
        "image": "https://example.com/images/bbq_ribs.jpg"
    },
    {
        "id": 37,
        "name": "Mushroom Risotto",
        "price": 11.49,
        "category": "maincourse",
        "image": "https://example.com/images/mushroom_risotto.jpg"
    },
    {
        "id": 38,
        "name": "Caramel Flan",
        "price": 6.99,
        "category": "desserts",
        "image": "https://example.com/images/caramel_flan.jpg"
    },
    {
        "id": 39,
        "name": "Turkey Club Sandwich",
        "price": 9.99,
        "category": "maincourse",
        "image": "https://example.com/images/turkey_club_sandwich.jpg"
    },
    {
        "id": 40,
        "name": "Margarita",
        "price": 7.49,
        "category": "beverage",
        "image": "https://example.com/images/margarita.jpg"
    },
    {
        "id": 41,
        "name": "Bruschetta",
        "price": 5.99,
        "category": "appetizers",
        "image": "https://example.com/images/bruschetta.jpg"
    },
    {
        "id": 42,
        "name": "Beef Tacos",
        "price": 10.99,
        "category": "maincourse",
        "image": "https://example.com/images/beef_tacos.jpg"
    },
    {
        "id": 43,
        "name": "Vanilla Milkshake",
        "price": 4.49,
        "category": "beverage",
        "image": "https://example.com/images/vanilla_milkshake.jpg"
    },
    {
        "id": 44,
        "name": "Waldorf Salad",
        "price": 8.49,
        "category": "appetizers",
        "image": "https://example.com/images/waldorf_salad.jpg"
    },
    {
        "id": 45,
        "name": "Rainbow Smoothie",
        "price": 6.99,
        "category": "beverage",
        "image": "https://example.com/images/rainbow_smoothie.jpg"
    },
    {
        "id": 46,
        "name": "Vegan Pad Thai",
        "price": 12.99,
        "category": "maincourse",
        "image": "https://example.com/images/vegan_pad_thai.jpg"
    },
    {
        "id": 47,
        "name": "Pesto Pasta",
        "price": 10.99,
        "category": "maincourse",
        "image": "https://example.com/images/pesto_pasta.jpg"
    },
    {
        "id": 48,
        "name": "Fruit Salad",
        "price": 7.49,
        "category": "desserts",
        "image": "https://example.com/images/fruit_salad.jpg"
    },
    {
        "id": 49,
        "name": "Pina Colada",
        "price": 5.99,
        "category": "beverage",
        "image": "https://example.com/images/pina_colada.jpg"
    },
    {
        "id": 50,
        "name": "Onion Rings",
        "price": 4.99,
        "category": "appetizers",
        "image": "https://example.com/images/onion_rings.jpg"
    }
]
