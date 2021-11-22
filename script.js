const btn = document.querySelector("#submit");
let td = [];
function loader() {
  td = [...localStorage.table.split(",")];
  localStorage.table.split(",").forEach((t) => {
    document.getElementById("tbody").innerHTML += t;
  });
}

function handleClick(event) {
  const fName = document.getElementById("first-name").value;
  const lName = document.getElementById("last-name").value;
  const address = document.getElementById("address").value;
  const pincode = document.getElementById("pincode").value;
  const gender = document.getElementsByName("gender");
  const food1 = document.getElementById("food1");
  const food2 = document.getElementById("food2");
  const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;
  const item = food1.options[food1.selectedIndex].text;
  const item2 = food2.options[food2.selectedIndex].text;
  let gendr = "";
  gender.forEach((gend) => {
    if (gend.checked) {
      gendr = gend.value;
    }
  });

  let tdVal = `<tr>
                <td>${fName}</td>
                <td>${lName}</td>
                <td>${address}</td>
                <td>${pincode}</td>
                <td>${gendr}</td>
                <td>${item}</td>
                <td>${item2}</td>
                <td>${state}</td>
                <td>${country}</td>
            </tr>`;
  if (fName !== "") {
    td.push(tdVal);
  }

  localStorage.setItem("table", td);
  loader();
  location.reload();
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("pincode").value = "";
  document.getElementById("state").value = "";
  document.getElementById("country").value = "";

  event.preventDefault();
}

btn.addEventListener("click", handleClick);

// localStorage.removeItem("table");
