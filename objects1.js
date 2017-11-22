var cars = {
    rentals: [
        {
            type: "Economy",
            Price:"99",
            available: 3,
            rented: 0,
        },
        {
            type: "Midsize",
            Price:"149",
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

for (var i = 0; i < cars.rentals.length;) {
   var selectCar = document.createElement("SELECT");
   selectCar.setAttribute("type", "option");
   selectCar.setAttribute("name", "carType");
   selectCar.setAttribute("value", i);
   selectCar.setAttribute("id", "car" + i);
   selectCar.setAttribute("onclick", "getDetails(" + i + ")");
   var radioLbl = document.createElement("LABEL");
   radioLbl.innerHTML = cars.rentals[i].type;
   document.getElementById("radialSection").appendChild(selectCar);
}



// function avail() {
// 	var carAvail= document.getElementById("carAvail");
//         if (document.getElementById("carsRent").value === "$99") {
//             carAvail.innerHTML = cars.rentals[0].available;
//         } else if (document.getElementById("carsRent").value === "$149") {
//             carAvail.innerHTML = cars.rentals[1].available;
//         }
// }	    

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
    


	
