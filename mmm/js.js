/*gallery*/
$(document).ready(function(){
    $(".gallery").slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 850,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
              }
            }
          ]
        
      });
  });
  
/*forma*/
  let modal = {
    closeModal: ()=>{
      this.wrapper.style.display = "none";
      window.history.pushState({"formtoggle": false},"","sport.html");
    },
    openModal: ()=>{
      this.wrapper.style.display = "flex";
      window.history.pushState({"formtoggle": true},"","#form");
    }
  };
  window.addEventListener("DOMContentLoaded", function(event){
    modal["showbutton"] = document.getElementById("showbutton");
    modal["wrapper"] = document.getElementById("wrapper");
    modal["closeX"] = document.getElementById("close"); //закрытие X
    modal["fields"] = document.querySelectorAll(".fields");
    modal["submitButton"] = document.getElementById("submitbutton");
    modal["postForm"] = document.getElementById("contact");
    modal.fields.forEach((element) => {   //реализация локального хранилища
        element.value = localStorage.getItem(element.name);
        element.addEventListener("blur",
        (event)=>localStorage.setItem(event.target.name, event.target.value));
    });
    modal.closeX.addEventListener("click",modal.closeModal);
    modal.showbutton.onclick = modal.openModal;
    window.onclick = function(event) { //закрытие окна при нажатии за его пределами
    if(event.target === modal.wrapper)
    {
     modal.closeModal();
    }
    };
    window.history.pushState({"formtoggle": false},"","sport.html"); //история API реализации
    window.addEventListener("popstate",(event) => {
    (event.state.formtoggle)? (modal.wrapper.style.display = "flex") : (modal.wrapper.style.display = "none");
    });
    window.addEventListener("keydown",function(event){ //закрытие окна при нажатии клавиши Esc
        if(modal.wrapper.style.display!=="none")
        {
            switch(event.key){
                case "Esc":
                case "Escape":
                    modal.closeModal();
                break;
        }
    }
    });
    (modal.fields.item(3).checked)? (modal.submitButton.disabled=false) : (modal.submitButton.disabled=true);
    modal.fields.item(3).addEventListener("change", (event)=>
    {(event.target.checked)? (modal.submitButton.disabled=false) : (modal.submitButton.disabled=true);});
    modal.postForm.addEventListener("submit", function(event){  //AJAX USING FETCH
        event.preventDefault();
        fetch("https://formcarry.com/s/jlY0uOamE_l",
        {
            method:"POST",
            headers:
            {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(Object.fromEntries(new FormData(modal.postForm)))
        })
        .then(function(response){
            if(!response.ok)
            {
                throw new Error(response.status);
            }
            return response;
        })
        .then((response)=>{alert("Заявка отправлена! Скоро с Вами свяжутся!");
            console.log(response.text());})
        .catch((error)=>{alert("Некорректные данные!");
            console.log(error);});
        modal.fields.forEach((element) => {element.value = "";});
        localStorage.clear();
    });
  });

  // Ждем загрузки DOM. Элемент <body> будет загружен автоматически.
window.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('button');
    button.addEventListener('click', function(event) {
      // Переключаем класс .opened
      event.target.classList.toggle('opened');
    });
  
  });