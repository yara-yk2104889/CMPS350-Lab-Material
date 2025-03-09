import promptSync from "prompt-sync";
const prompt = promptSync();

const products = [
    {id: 1, name: 'Apple 14 Pro Max', price: 4500},
    {id: 2, name: 'iPad Pro 12.9-inch', price: 5600},
    {id: 3, name: 'Samsung Galaxy S14', price: 3900},
    {id: 4, name: 'Microsoft Surface Book 3', price: 6700},
    {id: 5, name: 'Sony PlayStation 5', price: 3500},
    {id: 6, name: 'Dell XPS 13', price: 4500},
    {id: 7, name: 'LG 65-inch OLED TV', price: 9800},
    {id: 8, name: 'Bose QuietComfort 35 II', price: 1800}
];

let cart = [];

const menu =()=> {
    while (true){
        console.log("\nWhat would you like to do?")
        console.log("1. Add product");
        console.log("2. Change quantity");
        console.log("3. Delete product");
        console.log("4. Display invoice");
        console.log("5. Exit menu")

        const choice = prompt("Enter a number: ");
        switch (choice){
            case "1": addItem(); 
            break;
            case "2": changeQuantity(); 
            break;
            case "3": deleteItem(); 
            break;
            case "4": displayInvoice(); 
            break;
            case "5": 
            return;
            default: console.log("Only enter numbers between 1 and 5! try again.");
        }
    }
};

const allProducts=() => {
    console.log("\nAvailable Products: ");
    products.forEach(product => console.log(`${product.id}. ${product.name} - ${product.price} QAR`));
};


const addItem = () => {
    allProducts();
    const productId = parseInt(prompt("product ID: "));
    const quantity = parseInt(prompt("product quantity: "));

    const product = products.find(p => p.id === productId);
    if (!product) {
        console.log("invalid product ID!");
        return;
    }

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    console.log(`${product.name} has been added!`);
};

const changeQuantity = () => {
    console.log("\nYour current items: ");
    cart.forEach(item => console.log(`${item.id} : ${item.name} : ${item.quantity} pcs`));

    const productId = parseInt(prompt("product ID to change quantity: "));
    const newQuantity = parseInt(prompt("new quantity: "));

    const item = cart.find(item => item.id === productId);
    if (!item) {
        console.log("item not in cart :(");
        return;
    }

    item.quantity = newQuantity;
    console.log(`Updated ${item.name} quantity to ${newQuantity}.`);
};

const deleteItem = () => {
    console.log("\nYour current items: ");
    cart.forEach(item => console.log(`${item.id} : ${item.name} : ${item.quantity} pcs`));

    const productId = parseInt(prompt("product ID to remove: "));
    const index = cart.findIndex(item => item.id === productId);
    if (index === -1) {
        console.log("item not in cart :(");
        return;
    }
    console.log(`${cart[index].name} has been removed!`);
    cart.splice(index, 1);
};

const displayInvoice = () => {
    console.log("\nInvoice:");
    let total = 0;

    if (cart.length === 0) {
        console.log("no items in cart.");
        return;
    }

    let mostExpensive = cart[0];
    let leastExpensive = cart[0];

    cart.forEach(item => {
        const itemTotal = item.price*item.quantity;
        total += itemTotal;

        if (itemTotal>mostExpensive.price*mostExpensive.quantity)mostExpensive=item;
        if (itemTotal<leastExpensive.price*leastExpensive.quantity) leastExpensive=item;

        console.log(`${item.name}-${item.quantity} pcs-${itemTotal} QAR`);
    });
    console.log(`\nTotal: ${total} QAR`);
    console.log(`Most Expensive: *${mostExpensive.name}*`);
    console.log(`Least Expensive: **${leastExpensive.name}**`);
};
menu();

