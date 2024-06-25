var products = [
  {
    id: 1,
    name: "San pham 1",
    price: 1000,
  },
  {
    id: 2,
    name: "San pham 2",
    price: 2000,
  },
  {
    id: 3,
    name: "San pham 3",
    price: 3000,
  },
  {
    id: 4,
    name: "San pham 4",
    price: 4000,
  },
];

const tableProducts = document.querySelector(".products tbody");

products.forEach(function (product, index) {
  var tr = document.createElement("tr");
  var tdNo = document.createElement("td");
  tdNo.innerText = index + 1;

  tr.append(tdNo);

  var tdName = document.createElement("td");
  tdName.innerText = products.name;

  tr.append(tdName);

  var tdPrice = document.createElement("td");
  tdPrice.innerText = product.price.toLocaleString();

  tr.append(tdPrice);

  var tdAction = document.createElement("td");
  var quantityInput = document.createElement("input");
  quantityInput.value = 1;
  quantityInput.style = `width: 90%; display: block; margin: 0 auto`;
  tdAction.append(quantityInput);

  var button = document.createElement("button");
  button.innerText = "Them vao gio";
  button.style = `width: 100%`;

  tdAction.append(button);

  tr.append(tdAction);

  tableProducts.append(tr);
});

var renderCart = function () {
  var table = document.createElement("table");
  table.cellpadding = 0;
  table.cellspacing = 0;
  table.style = `width: 100%`;
  table.border = 1;
};
