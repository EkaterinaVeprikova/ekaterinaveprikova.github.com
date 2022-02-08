let modal = {
    closeModal: ()=>{
      this.wrapper.style.display = "none";
      window.history.pushState({"formtoggle": false},"","index8.html");
    },
    openModal: ()=>{
      this.wrapper.style.display = "flex";
      window.history.pushState({"formtoggle": true},"","#form");
    }
  };

  window.addEventListener("DOMContentLoaded", function(event){
    modal["show_button"] = document.getElementById("show_button");
    modal["wrapper"] = document.getElementById("wrapper");
    modal["close"] = document.getElementById("close"); //закрытие X
    modal["fields"] = document.querySelectorAll(".fields");
    modal["submit_button"] = document.getElementById("submit_button");
    modal["my_form"] = document.getElementById("main_infa");
    modal.fields.forEach((element) => {   //локальное хранилище
        element.value = localStorage.getItem(element.name);
        element.addEventListener("blur",
        (event)=>localStorage.setItem(event.target.name, event.target.value));
    });
    modal.close.addEventListener("click",modal.closeModal);
    modal.show_button.onclick = modal.openModal;
    window.onclick = function(event) { //закрытие при нажатии за пределами окна
    if(event.target === modal.wrapper)
    {
     modal.closeModal();
    }
    };
    window.history.pushState({"formtoggle": false},"","index8.html"); //история API 
    window.addEventListener("popstate",(event) => {
    (event.state.formtoggle)? (modal.wrapper.style.display = "flex") : (modal.wrapper.style.display = "none");
    });
    window.addEventListener("keydown",function(event){ //закрытие при нажатии Esc
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
    (modal.fields.item(3).checked)? (modal.submit_button.disabled=false) : (modal.submit_button.disabled=true);
    modal.fields.item(3).addEventListener("change", (event)=>
    {(event.target.checked)? (modal.submit_button.disabled=false) : (modal.submit_button.disabled=true);});
    modal.my_form.addEventListener("submit", function(event){  //AJAX USING FETCH
        event.preventDefault();
        fetch("https://formcarry.com/s/TSPqjN4-kTv",
        {
            method:"POST",
            headers:
            {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(Object.fromEntries(new FormData(modal.my_form)))
        })
        .then(function(response){
            if(!response.ok)
            {
                throw new Error(response.status);
            }
            return response;
        })
        .then((response)=>{alert("Форма отправлена!");
            console.log(response.text());})
        .catch((error)=>{alert("Ошибка!");
            console.log(error);});
        modal.fields.forEach((element) => {element.value = "";});
        localStorage.clear();
    });
  }); 