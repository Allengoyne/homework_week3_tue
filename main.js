var sumCallback = function(previousValue, currentValue, index, array) {
  return previousValue + currentValue.price;
  };
  var initialValue = 0;
  var average = items.reduce(sumCallback, initialValue) / items.length;

  console.log(average.toFixed(2));



//
// 2. Show me how to get an array of items that cost between $14.00 and $18.00 USD
//
//   ```
//   "Items that cost between $14.00 USD and $18.00 USD:"
//   [
//    {
//       title: "1970s Coors Banquet Glass Beer Pitcher",
//       ...
//    },
//    {
//       title: "The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug",
//       ...
//    },
//    {
//       title: "Hand Painted Colorful Feather Glass",
//       ...
//    }
//   ]
//   ```
var getRange = items.filter(function(element, index, array){
  var price = element.price;
  return (price >= 14 && price <=18) 
});
console.log(getRange);


//
// 3. Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.
//
//   ```
//   1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18
//   ```
//
// 4. Show me how to find which items are made of wood. Please console.log the ones you find.
//
//   ```
//   SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
//   Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
//   Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
//   Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
//   Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.
//   ```
//
// 5. Show me how to find which items are made of eight or more materials. Please console.log the ones you find.
//
//   ```
//   Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
//   wall mount bottle opener
//   wedding
//   man cave
//   christmas gift
//   guy gift
//   fathers day
//   home bar
//   beer
//   bar
//
//   The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials:
//
//   glass
//   sandblast cabinet
//   vinyl
//   beer glass
//   pint glass
//   etched pint glass
//   etched glass
//   etched beer glass
//   16 oz pint
//   beer gift
//   etched harry potter glass
//   the three broomsticks glass
//   personalized harry potter glass
//   ```
//
// 6. Show me how to calculate how many items were made by their sellers
//   ```
//   18 were made by their sellers
//   ```
