//завдання 1

 //  const blank = window.open("", "", "width=300,height=300");

 //  setTimeout(() => {
 //      blank.resizeTo(500, 500);
 //  }, 2000);

 //  setTimeout(() => {
 //      blank.moveTo(200, 200);
 //  }, 4000);

 //  setTimeout(() => {
 //      blank.close();
 //  }, 6000);



 // завдання 2
 // const body = document.querySelector("body");
 // const buttons = document.querySelectorAll("button");
 // const link = document.querySelector("a");

 // buttons[0].onclick = function(){
 //     body.style.backgroundColor = "blue";
 // };
 // buttons[1].ondblclick = function(){
 //     body.style.backgroundColor = "pink";
 // };
 // buttons[2].onmousedown = function() {
 //     body.style.backgroundColor = "brown";
 // };
 // buttons[2].onmouseup = function(){
 //     body.style.backgroundColor = "white";
 // };
 // link.onmouseenter = function(){
 //     body.style.backgroundColor = "yellow";
 // };
 // link.onmouseleave = function() {
 //     body.style.backgroundColor = "white";
 // };


 // завдання 3


//   const deleteButton = document.querySelector("button");

 //  deleteButton.onclick = function () {
 //      const names = document.getElementById('names');
 //      names.removeChild(names.options[names.selectedIndex]);
 //  };





 //завдання 4

 // const button = document.querySelector("button");

 // button.onclick = function(){
 //     console.log ("I was pressed");
 // };
 // button.onmouseenter = function(){
 //     console.log ("Mouse is on me");
 // };
 // button.onmouseleave = function(){
 //     console.log ("mouse is not on me");
 // };

 // завдання 5
 //  function showWindowSize (){
 //      const width = document.documentElement.clientWidth;
 //      const height = document.documentElement.clientHeight;

 //      const body = document.querySelector("body").innerHTML = `Width : ${width} Height : ${height}`;
 //  }

 //  window.addEventListener("resize", showWindowSize);


 //завдання 6

 const country = document.querySelector("#country");
 const cities = document.querySelector("#cities");
 const paragraph = document.querySelector("p");
 let cityName;
 let countryName;

 const cityData = {
     ger: ["Berlin", "Dresden", "Dortmund"],
     usa: ["Chicago", "Miami", "Denver"],
     ukr: ["Kyiv", "Lviv", "Dnipro"]
 };

 country.addEventListener("change", function () {
     const selectedCities = cityData[this.value];
     cities.length = 0;
     for (let i = 0; i < selectedCities.length; i++) {
         cities.add(new Option(selectedCities[i]));
     }
     countryName =  country[this.selectedIndex].textContent;
     paragraph.innerHTML = `${countryName}`;
      
 });

 cities.addEventListener("change", function () {
    cityName = cities[this.selectedIndex].textContent;
    paragraph.innerHTML = `${countryName} - ${cityName}`;
   });