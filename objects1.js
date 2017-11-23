var cars = {
    rentals: [
        {
            name: "Economy",
            price:"99",
            available: 3,
            rented: 0,
        },
        {
            name: "Midsize",
            price:"149",
            available: 2,
            rented: 0,
       }
   ]
   }
  	var rentalName = {
	 nameOfRenter: "",
	 carType: ["", ""],
	}

// function getDetails() {
//     var carsRent = document.getElementById("carsRent");
//     var divprice = document.getElementById("divprice");
//     var result = avail();	
	
//  divprice.innerHTML = carsRent.value;	
// }

function displayDetails(car) {
    document.getElementById("carPrice").innerHTML = cars.rentals[car].price;
    document.getElementById("carsAvail").innerHTML = cars.rentals[car].available;
    
}

// function displayDetails(car)
// {
// var eID = document.getElementById("carOptions");
// var dayVal = eID.options[eID.selectedIndex].selected;
// document.getElementById("carPrice").innerHTML = cars.rentals[car].price;
// document.getElementById("carsAvail").innerHTML = cars.rentals[car].available;
// }
// function carOptions() {
//     var x = document.getElementById("carType");
//     var option = document.createElement("option");
//     option.text = "Economy";

for (var i = 0; i < cars.rentals.length; i++) {
var selectCar = document.createElement("OPTION");
   selectCar.setAttribute("type", "select");
   selectCar.setAttribute("name", "vehType");
   selectCar.setAttribute("value", i);
   selectCar.setAttribute("id", "car" + i);
   selectCar.setAttribute("onchange", "displayDetails(" + i + ")");
//   var chosenoption = selectCar.options[selectCar.selectedIndex]
   selectCar.innerHTML = cars.rentals[i].name;
   document.getElementById("carOptions").appendChild(selectCar);
}

	  //ecarFunction: function() {
	  // return this.economyCars - this.economyCarsBooked;
	  //},
	  
	  //midcarFunction: function() {
	  // return this.midsizeCars - this.midsizeCarsBooked;
	  //},
	  
	  //bookEcon: function() {
	  //    return this.economyCarsBooked++;
	  //},
	  
	  //bookMid: function() {
	  //    return this.midsizeCarsBooked++;
	  //}
	  //};
	    
	// function availFunction() {
	// document.getElementById("ecars").innerHTML = cars.name[0];
	// document.getElementById("midcars").innerHTML = cars.name[1];
	// document.getElementById("ecarsAvail").innerHTML = cars.ecarFunction();
	// document.getElementById("midcarsAvail").innerHTML = cars.midcarFunction();
	// }
	
	// function rentCar() {
	// cars.bookEcon();
	// document.getElementById("ecarsAvail").innerHTML = cars.ecarFunction();
	// }

 //   function rentMidcar(){
 //   cars.bookMid();
	// document.getElementById("midcarsAvail").innerHTML = cars.midcarFunction();    
 //   }
    


	
