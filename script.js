let xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
);

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    let datas = JSON.parse(this.response);

    const ul = document.getElementById("ul");
    const div = document.createElement("div");
    const h3 = document.createElement("p");
    h3.setAttribute("id", "description");
    h3.setAttribute("class", "text-center display-5");
    const mainDiv = document.getElementById("data");
    // mainDiv.setAttribute("class", "mainDiv");

    // document.body.append(mainDiv);

    div.setAttribute("class", "pagination");

    datas.forEach((data) => {
      const li = document.createElement("li");
      li.setAttribute("class", "page-item");
      const a = document.createElement("a");
      a.setAttribute("href", "#");
      a.setAttribute("class", "page-link");
      a.innerText = data.id;
      li.append(a);
      console.log(li);
      ul.appendChild(li);
    });
    const li = document.createElement("li");
    li.setAttribute("class", "page-item");
    const a = document.createElement("a");
    a.setAttribute("href", "#");
    a.setAttribute("class", "page-link");
    a.innerText = "NEXT";
    li.append(a);
    ul.appendChild(li);
    document.body.appendChild(div);

    const as = document.querySelectorAll("a");
    as.forEach((a) => {
      a.addEventListener("click", handleClick);
    });
    let val = 0;
    function handleClick() {
      datas.forEach((data) => {
        if (this.innerText === data.id) {
          val = parseInt(this.innerText) - 1;
          document.getElementById("name").innerHTML = data.name;
          document.getElementById("mail").innerHTML = data.email;
          // mainDiv.appendChild(h1);
          // mainDiv.appendChild(h3);
        }
      });

      if (this.innerText === "Previous") {
        if (val === 0) {
          console.log(`PREV : ${val}`);
          document.getElementById("name").innerHTML =
            datas[datas.length - 1].name;
          document.getElementById("mail").innerHTML =
            datas[datas.length - 1].email;

          val = datas.length - 1;
        } else {
          console.log(`PREV : ${val}`);
          val -= 1;
          document.getElementById("name").innerHTML = datas[val].name;
          document.getElementById("mail").innerHTML = datas[val].email;
        }
      }
      if (this.innerText === "NEXT") {
        if (val === 0 || val === datas.length - 1) {
          console.log(`NEXT : ${val}`);
          document.getElementById("name").innerHTML = datas[0].name;
          document.getElementById("mail").innerHTML = datas[0].email;
          if (val !== datas.length - 1) {
            val += 1;
          } else {
            val = 0;
          }
        } else {
          console.log(`NEXT : ${val}`);
          document.getElementById("name").innerHTML = datas[val].name;
          document.getElementById("mail").innerHTML = datas[val].email;

          if (val !== datas.length - 1) {
            val += 1;
          } else {
            val = 0;
          }
        }
      }
    }
  }
};

xhr.send();
