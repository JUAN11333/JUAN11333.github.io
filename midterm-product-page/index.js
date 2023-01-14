var quotation = [
  {
    quantity: 1,
    item: "Product B",
    price: 200,
    discount: 50,
  },
  {
    quantity: 10,
    item: "Product B",
    price: 200,
    discount: 100,
  },
  {
    quantity: 10,
    item: "Product B",
    price: 200,
    discount: 100,
  },
];

function addToQuotation() {
  let quotationObj = {
    quantity: $("#quantity").val(),
    item: $("#item").val(),
    price: $("#price").val(),
    discount: $("#discount").val(),
  };

  $("#quotationBody").html("");

  quotation.push(quotationObj);
  loadData();
}

function deleteQuotation(index) {
  console.log("DELETE", index);
  delete quotation[index];
  quotation = quotation.filter((res) => {
    return res != "undefined";
  });
  $("#quotationBody").html("");
  loadData();
}

function clearQuotation() {
  for (let p in quotation) {
    deleteQuotation(p);
  }
}

function loadData() {
  for (let i = 0; i < quotation.length; i++) {
    for (let a = i + 1; a < quotation.length; a++) {
      if (
        quotation[i].item == quotation[a].item &&
        quotation[i].price == quotation[a].price
      ) {
        quotation[i].quantity =
          quotation[a].quantity * 1 + quotation[i].quantity * 1;
        quotation[i].discount =
          quotation[i].discount * 1 + quotation[a].discount * 1;
        delete quotation[a];
        quotation = quotation.filter((res) => {
          return res != "undefined";
        });
        a -= 1;
      }
    }
  }
  let allRows = "";
  let total = 0;
  let total_amount = 0;
  let total_discount = 0;

  for (let p in quotation) {
    let deleteicon = `<td><i class="fa-sharp fa-solid fa-trash" onclick='deleteQuotation("${p}")'></i></td>`;

    let cellQuantity =
      "<td class='text-right'> " + quotation[p].quantity + "</td>";

    let cellItem = "<td class='text-left'>" + quotation[p].item + "</td>";

    let cellPrice = "<td class='text-right'>" + quotation[p].price + "</td>";

    let cellDiscount =
      "<td class='text-right'>" + quotation[p].discount + "</td>";

    let discount = quotation[p].discount * 1;

    let amount = quotation[p].quantity * quotation[p].price;

    let cellAmount = '<td class="text-right">' + amount + "</td>";

    total += amount;
    total_amount += amount;
    total_discount += discount;
    total -= discount;

    let row = `<tr>${deleteicon}${cellQuantity}${cellItem}${cellPrice}${cellDiscount}${cellAmount}</tr>`;
    allRows += row;
  }
  $("#quotationBody").html(allRows);

  $("#toamo").html(total_amount);

  $("#todis").html(total_discount);

  $("#total").html(total);
}
