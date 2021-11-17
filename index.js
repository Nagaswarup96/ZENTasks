let xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
);

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    let datas = JSON.parse(this.response);

    const div = document.createElement("div");
    const div1 = document.createElement("a");
    const div2 = document.createElement("a");
    const h1 = document.createElement("h1");
    const h3 = document.createElement("h3");
    const mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "mainDiv");

    div1.setAttribute("id", "prev");
    div2.setAttribute("id", "next");

    document.body.append(mainDiv);
    div1.innerHTML = "PREV";
    div2.innerHTML = "NEXT";
    div.appendChild(div1);
    div.appendChild(div2);
    div.setAttribute("class", "pagination");

    datas.forEach((data) => {
      const a = document.createElement("a");
      a.setAttribute("href", "#");
      a.innerHTML = data.id;
      div.appendChild(a);
    });

    document.body.appendChild(div);

    const as = document.querySelectorAll("a");
    as.forEach((a) => {
      a.addEventListener("click", handleClick);
    });
    let val = 0;
    function handleClick() {
      datas.forEach((data) => {
        if (this.innerText === data.id) {
          console.log(data.name);
          val = parseInt(this.innerText) - 1;
          h1.innerHTML = `NAME : <span id="name">${data.name}</span>`;
          h3.innerHTML = `EMAIL : <span id="email">${data.email}</span>`;
          mainDiv.appendChild(h1);
          mainDiv.appendChild(h3);
        }
      });

      if (this.innerText === "PREV") {
        if (val === 0) {
          console.log(`PREV : ${val}`);
          h1.innerHTML = `NAME : <span id="name">${
            datas[datas.length - 1].name
          }</span>`;
          h3.innerHTML = `EMAIL : <span id="email">${
            datas[datas.length - 1].email
          }</span>`;
          val = datas.length - 1;
          mainDiv.appendChild(h1);
          mainDiv.appendChild(h3);
        } else {
          console.log(`PREV : ${val}`);
          val -= 1;
          h1.innerHTML = `NAME : <span id="name">${datas[val].name}</span>`;
          h3.innerHTML = `EMAIL : <span id="email">${datas[val].email}</span>`;

          mainDiv.appendChild(h1);
          mainDiv.appendChild(h3);
        }
      }
      if (this.innerText === "NEXT") {
        if (val === 0 || val === datas.length - 1) {
          console.log(`NEXT : ${val}`);
          h1.innerHTML = `NAME : <span id="name">${datas[0].name}</span>`;
          h3.innerHTML = `EMAIL : <span id="email">${datas[0].email}</span>`;
          mainDiv.appendChild(h1);
          mainDiv.appendChild(h3);
          if (val !== datas.length - 1) {
            val += 1;
          } else {
            val = 0;
          }
        } else {
          console.log(`NEXT : ${val}`);
          h1.innerHTML = `NAME : <span id="name">${datas[val].name}</span>`;
          h3.innerHTML = `EMAIL : <span id="email">${datas[val].email}</span>`;
          mainDiv.appendChild(h1);
          mainDiv.appendChild(h3);
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
