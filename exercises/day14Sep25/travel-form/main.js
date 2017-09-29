//document.travelForm.addEventListener("submit", function(){
//    event.preventDefault();
//  console.log(document.travelForm.fName.value);
//    console.log(document.travelForm.lName.value);
//    console.log(document.travelForm.age.value);
//    console.log(document.travelForm.genderRadio.value);
//     console.log(document.travelForm.flyToLocatios.value);
//    console.log(document.travelForm.foodRestrictions.value);
//});



document.travelForm.addEventListener("submit", function(event){
    event.preventDefault();
    
    var dietListChecked = [];
    for(var i = 0; i < document.travelForm.foodRestrictions.length; i++)
      if (document.travelForm.foodRestrictions[i].checked){
         dietListChecked.push(document.travelForm.foodRestrictions[i].value);
      }

  alert("First name:" + document.travelForm.fName.value + 
         "\nLast name: " + document.travelForm.lName.value + "\nAge: " + document.travelForm.age.value + 
         "\nGender: " + document.travelForm.genderRadio.value + "\nLocation: " + document.travelForm.flyToLocatios.value + "\nDietary restrictions: " + dietListChecked );

});

_____OR______

alert(`$ `)