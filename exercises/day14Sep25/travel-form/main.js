//document.travelForm.addEventListener("change", function(){
//   
//   
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

  alert(("First name:" + document.travelForm.fName.value + "\n" + 
         "Last name: " + document.travelForm.lName.value + "\n"+ 
         "Age: " + document.travelForm.age.value + "\n" + 
         "Gender: " + document.travelForm.genderRadio.value + "\n" + 
         "Location: " + document.travelForm.flyToLocatios.value + "\n" + 
         "Dietary restrictions: " + dietListChecked ));

});

