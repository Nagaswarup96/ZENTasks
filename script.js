const val = document.getElementById("data");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  setTimeout(function () {
    let value = 10;
    val.innerText = value;
    setTimeout(function () {
      val.innerText = 9;
      setTimeout(function () {
        val.innerText = 8;
        setTimeout(function () {
          val.innerText = 7;
          setTimeout(function () {
            val.innerText = 6;
            setTimeout(function () {
              val.innerText = 5;
              setTimeout(function () {
                val.innerText = 4;
                setTimeout(function () {
                  val.innerText = 3;
                  setTimeout(function () {
                    val.innerText = 2;
                    setTimeout(function () {
                      val.innerText = 1;
                      setTimeout(function () {
                        val.innerText = 0;
                        setTimeout(function () {
                          document
                            .getElementById("data")
                            .setAttribute(
                              "class",
                              "display-1 text-uppercase font-weight-bolder text-center text-danger"
                            );
                          val.innerText = "Happy New Year!!!";
                        }, 500);
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
});
