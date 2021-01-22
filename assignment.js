



 //kilometerToMeter

//  function kilometerToMeter(kilometer) {
//      var meter = 1000 * kilometer;
//      return meter;
//  }
//  var meter = kilometerToMeter(15);
//  console.log(meter);
 
 
 
//       budgetCalculator
 
//  function budgetCalculator(watch, phone, laptop){
//      var totalprice = 0;
//      if(watch >= 0 && phone >= 0 && laptop >= 0){
//         var watchPrice = watch * 50;
//         var phonePrice = phone * 100;
//         var laptopPrice = laptop * 500;
//         totalprice = watchPrice + phonePrice + laptopPrice;
//      }
//      else{
//          return('answer is negative')
//      }
//      return totalprice;
//  }
     
//  var numbers = budgetCalculator(10, 5, 2);
//  console.log(numbers);
 
 
 
 
//       hotelCost
 
//  function hotelCost(rate){
//      var night = 0;
//  if(rate<=10){
//      night = rate * 100;
//  }
//  else if(rate<=20){
//      var firstnight = 10 * 100;
//      var remaining = rate - 10;
//      var secondnight = remaining * 80;
//      night = firstnight + secondnight;
//  }
//  else{
//      var firstnight = 10 * 100;
//      var secondnight = 10 * 80;
//      var remaining = rate - 20;
//      var thirdnight = remaining * 50;
//      night = firstnight + secondnight + thirdnight;
//  }
//    return night;
//  }
//  var total = hotelCost(22);
 
//  console.log(total);
 
 
//       megaFriend
 
 function findLongestWord(str){
   var max = str[0];
 for(var i = 0; i < str.length; i++){
     var element = str[i];
     if(element.length > max.length){
         max = element;
     }
 }
   
     return max;
 }
 var str = ["Ryhan", "Alamin", "Nayem", "Sakib", "alamin", "sayem"];
 var megaFriend = findLongestWord(str);
 console.log(megaFriend);


 