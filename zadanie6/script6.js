// элементы формы
const squareInput = document.querySelector('#square-input');
const inputs = document.querySelectorAll('input');

//селектор
const select = document.getElementsByName('myselect')

// радиокнопки
const radioType = document.querySelectorAll('input[name="type"]');

// чекбокс
const ceilings = document.querySelector('input[name="ceiling"]');

const basePrice = 0;
const totalPriceElement = document.querySelector('#total-price');

let selectnow=1;
let radios = document.getElementById('radios');
let checkbox = document.getElementById('checkbox');

function calculate() {
	let totalPrice
    const reg = /[^0-9]|\b0[0-9]+/;
    if(reg.test(parseInt(squareInput.value)) === true){
        alert("Повторите ввод данных");
        totalPriceElement.innerText = "0";
    }
    else{
        if(selectnow==1){ //печенье
            totalPrice=200;
            totalPrice *= parseInt(squareInput.value);
        }
        else if(selectnow==2){ //шоколад
            totalPrice=100;
            for (const radio of radioType) {
                if (radio.checked) {
                    totalPrice = totalPrice * parseFloat(radio.value);
                }
            }
            totalPrice *= parseInt(squareInput.value);
        }
        else if(selectnow==3){ //конфеты
            totalPrice=800;
            if (ceilings.checked) {
                totalPrice = totalPrice + parseInt(ceilings.value);
            }
            totalPrice *= parseInt(squareInput.value);
        }
        const formatter = new Intl.NumberFormat('ru');
        totalPriceElement.innerText = formatter.format(totalPrice);
    }
}

//калькулятор 
function onClick() {
    const reg = /[^0-9]|\b0[0-9]+/;
    let price = document.getElementsByName("field1");
    let amount = document.getElementsByName("field2");
    if((reg.test(price[0].value) || reg.test(amount[0].value)) === true){
        alert("Ошибка! Некорректный ввод!");
    }
    else { 
      let result = document.getElementById("result");
      result.innerHTML = parseInt(price[0].value)*parseInt(amount[0].value);
      return false;
    }
  }

  //калькулятор, где печенье, шоколад и конфеты

window.addEventListener('DOMContentLoaded', function (event) {
    calculate();
    radios.style.display = "none";
    checkbox.style.display = "none";
    select[0].addEventListener("change", function(event) {
      let select = event.target;
      if (select.value == "1") {
        radios.style.display = "none";
        checkbox.style.display = "none";
        selectnow = 1;           
      }
      else if(select.value == "2") {
        radios.style.display = "block";
        checkbox.style.display = "none";
        selectnow = 2;
      }
      else {
        radios.style.display = "none";
        checkbox.style.display = "block";
        selectnow = 3;
      }
      calculate();
    });
    
    for (const input of inputs) {
        input.addEventListener('input', function () {
            calculate();
        });
    }

    //калькулятор 
    let button = document.getElementById("count");
    button.addEventListener("click", onClick);
    
  });