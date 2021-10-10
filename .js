 function raschitat(){
    let re = /^\d+$/;
    let price = document.getElementById("price");
    let quantity = document.getElementById("quantity");
    let r = document.getElementById("result");
    if(re.test(price.value) && re.test(quantity.value)){
        alert(r.innerHTML = "Стоимость равна: " + parseFloat(price.value) * parseFloat(quantity.value) + " руб.");
    } else{
        alert(r.innerHTML = "Введите корректные данные");
    }
    return false;
  }

  window.addEventListener('DOMContentLoaded', function (_event) {
    console.log("DOM fully loaded and parsed");
    document.getElementById("my-button").addEventListener("click", raschitat);
  });