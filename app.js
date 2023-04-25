const toggle = document.querySelector("#period-toggle");
const prices = document.querySelectorAll(".price");

toggle.checked = false;
toggle.addEventListener("click", updatePricing);

function updatePricing(e) {
  if (e.target.checked == true) {
    prices[0].innerHTML = "19.99";
    prices[1].innerHTML = "24.99";
    prices[2].innerHTML = "39.99";
  }
  if (e.target.checked == false) {
    prices[0].innerHTML = "199.99";
    prices[1].innerHTML = "249.99";
    prices[2].innerHTML = "399.99";
  }
}
