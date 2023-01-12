///Suppliers section

let addsupplier = document.getElementById("addsupplier");
let supplierListContainer = document.getElementById("supplierListContainer");
let supplier_input = document.getElementById("supplier_input");

addsupplier.addEventListener("click", function () {
  var paragraph1 = document.createElement("p1");
  paragraph1.innerText = supplier_input.value;
  supplierListContainer.appendChild(paragraph1);

  paragraph1.addEventListener("click", function () {
    paragraph1.style.textDecoration = "line-through";
    paragraph1.style.textAlign = "vertical";
  });
  paragraph1.addEventListener("dblclick", function () {
    supplierListContainer.removeChild(paragraph1);
  });
});

/// Ceremony Section
let addceremony = document.getElementById("addceremony");
let ceremony_input = document.getElementById("ceremony_input");
let ceremonyListContainer = document.getElementById("ceremonyListContainer");

addceremony.addEventListener("click", function () {
  var paragraph2 = document.createElement("p2");
  paragraph2.innerText = ceremony_input.value;
  ceremonyListContainer.appendChild(paragraph2);

  paragraph2.addEventListener("click", function () {
    paragraph2.style.textDecoration = "line-through";
  });
  paragraph2.addEventListener("dblclick", function () {
    ceremonyListContainer.removeChild(paragraph2);
  });
});

/// breakfast Section
let addbreakfast = document.getElementById("addbreakfast");
let breakfast_input = document.getElementById("breakfast_input");
let breakfastListContainer = document.getElementById("breakfastListContainer");

addbreakfast.addEventListener("click", function () {
  var paragraph3 = document.createElement("p3");
  paragraph3.innerText = breakfast_input.value;
  breakfastListContainer.appendChild(paragraph3);

  paragraph3.addEventListener("click", function () {
    paragraph3.style.textDecoration = "line-through";
  });
  paragraph3.addEventListener("dblclick", function () {
    breakfastListContainer.removeChild(paragraph3);
  });
});

/// reception Section
let addreception = document.getElementById("addreception");
let reception_input = document.getElementById("reception_input");
let receptionListContainer = document.getElementById("receptionListContainer");

addreception.addEventListener("click", function () {
  var paragraph4 = document.createElement("p4");
  paragraph4.innerText = reception_input.value;
  receptionListContainer.appendChild(paragraph4);

  paragraph4.addEventListener("click", function () {
    paragraph4.style.textDecoration = "line-through";
  });
  paragraph4.addEventListener("dblclick", function () {
    receptionListContainer.removeChild(paragraph4);
  });
});

// true for mobile device
//  document.write("mobile device");
//} else {
// false for not mobile device
// document.write("not mobile device");
//}
//console.log;
