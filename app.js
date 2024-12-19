console.log("Hello world!");

// We have to store some global values
let cookieCount = 0
let cookiesPerSecond = 0
// You can start your game with having no cookies added to your total each second, or you can start with adding 1 cookie per second.

// Can store game data values as object as well
let gameData = {
    cookieCount: 0,
    cookiesPerSecond: 0
};


const shopUpgradesArray = [] // empty array. Maybe we should fill it with the upgrades from the API

// How to render these things on the webpage / DOM?
//DOM manipulation
// Select the DOM elements (button, images, p,...)

// Let's come up with a way to retreive and display the upgrades from Joe's API

const upgradesContainer = document.getElementById("upgrades-shop-container");

// https://cookie-upgrade-api.vercel.app/api/upgrades
async function getShopUpgrades () {
    const result = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades"); 
    // fetch request some data from URL, hey fetch me data from this url 
    // We now need to translate the data we receive from JSON to something we can use 
    const data = await result.json(); 
    // store data in const and use result i got and translate into JSON using json method - need await as result needs to be awaited
    
    // if you want to value outside function we use return so data is available elsewhere in code 
    
    //How should we store the data? Array
    // How do we create the array - made on line 15
    shopUpgradesArray.push(data);
    return data
    
    // console.log(shopUpgradesArray);

    // Need to PUSH upgrade items that we got from our fetch, into our empty array!
    // Remember that the upgrades that we fetched will be known by a variable name that you have set on line 29 
};

getShopUpgrades();

// //take data in array and render it to DOM
// async function renderShopUpgrades(){
//     const getShopItems = await getShopUpgrades(); // await needed so js will wait to get data 
//     // Now that we have our upgrade items inside an array, we can perform array method on them! Just like we did for images in teh WK2 gallery submission --> loop through array 

//     getShopItems.forEach (function (upgrade){ //each object in array will be called upgrade 
//         // go back to gallery loop and apply the same logic to this loop 
//         // const upgradeName = [FINISH THIS CODE]
//         // const upgradeCost = [FINISH THIS CODE]
//         // const upgradeCPSIncrease = [FINISH THIS CODE]
//         // These elements should be ones that display text (p,h2...)
//         // These are brand values elements that don't contain any content sowe need to assign contntent to them. Exacty thre same strtegy asd when you assigned a scr and alt to the thumbnail images in WK2
//         // These values come from the upgrade objects inside our array (the ones we just pushed in there from our API)
//         // Instead of these element a src and alt we want to give them some TEXTCONTENT
//         // Apend these elements into the relevant container int he same way as you appended your img into the thumbnail container in WK2
//         // This is a decent place to also create a button element and attach a event listener to it! - for the upgrade name, upgrade cost... You will then need to create a handler function for the button that you create! 

//     })

// }
// // call the function
// renderShopUpgrades()

// // We want our upgrades to actually do something! We need to give each upgrade a button and attach an event listener to those buttons

// function handleUpgradeClick (){} //Runs when user clicks our upgrade
// // The logic for the button to only deal with the values of the specific upgrade it was created for is the same logic as the event handler for the creation of the large image element in week 2 submission. 
// // Here is a great place to include some logic that checks a CONDITIONAL to see if you have enough cookies in cookieCount to be able to afford the price of the upgrade.
// //If you cant afford upgrade, how can you give this feedback to your user?
// // compare cookieCount to upgradeCost 

// setInterval(function () { // Triggers a function after a certain amount of time - in () speciify function which doesn't need a name as only used for this function

//     // Want our timer to increase the value of cookieCount by the value of cookiesPerSecond every second e.g. if cps is 10 the cookie count will increase by 10
//     // We want to update the cookieCount value on our page as it changes 
//     // I want to store this value in local storage so that my user can resume the game with their game data intact.

// }, 1000);

// //  Timer shouls ave the cookie count in local storage 

// // It is fine to perform all of the actins (3 diff things) that we want our setInterval function to do with external functions, then you can callback those functions inside the setInterval function. 

