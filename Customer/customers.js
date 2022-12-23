var customers = [
  {
    name: "Leon Kenedy",
    email: "leon@racoon.com",
    phone: "098-123-4567",
  },
  {
    name: "Clair Redfield",
    email: "clair@racoon.com",
    phone: "098-123-9999",
  },
  {
    name: "Jill Valentine",
    email: "jill@racoon.com",
    phone: "111-111111",
  },
  {
    name: "Tate Beard",
    email: "nunc.sed@outlook.org",
    phone: "(880) 981-7631",
  },
  {
    name: "Kiona Talley",
    email: "netus.et@aol.com",
    phone: "(747) 540-7374",
  },
  {
    name: "Lunea Price",
    email: "etiam@icloud.net",
    phone: "(980) 608-7151",
  },
  {
    name: "Cara Benson",
    email: "dapibus.ligula@aol.ca",
    phone: "1-728-606-5103",
  },
  {
    name: "Alexa Juarez",
    email: "odio@icloud.edu",
    phone: "(669) 558-2928",
  },
];

// $(document).ready(function () {
//   console.log("ready!");
//   // load data
//   $.ajax({
//     url: "data.json",
//   }).done(function (data) {
//     //$(this).addClass("done");
//     console.log("DONE", data);
//     for (let d in data) {
//       // save the data record into our global variable
//       customers.push(data[d]);
//       let dataStr = `<tr>
//                 <td>${data[d].name}</td>
//                 <td>${data[d].email}</td>
//                 <td>${data[d].phone}</td>
//             </tr>`;
//       $("#data-table tr:last").after(dataStr);
//     }
//     console.log(customers);
//   });
// });

function addToCustomer() {
  let customerObj = {
    name: $("#name").val(),
    email: $("#email").val(),
    phone: $("#phone").val(),
  };

  $("#customerBody").html("");

  customers.push(customerObj);
  loadData();
}

function deleteCustomer(index) {
  console.log("DELETE", index);
  delete customers[index];
  $("#customerBody").html("");
  loadData();
}

function loadData() {
  let allRows = "";
  for (let p in customers) {
    let cellName =
      `<td><img class='icon' src='/Table/delete.png' onclick='deleteCustomer("${p}")'> ` +
      customers[p].name +
      "</td>";

    let cellEmail = "<td>" + customers[p].email + "</td>";

    let cellPhone = "<td>" + customers[p].phone + "</td>";

    let row = `<tr>${cellName}${cellEmail}${cellPhone}</tr>`;
    allRows += row;
  }
  $("#customerBody").html(allRows);
}
