function moveNavbar(){
   
}

$(document).ready(function (){
   
    moveNavbar();
    $(window).resize((event)=>{
        moveNavbar();
    });

    $("#fpolicy").change(function () {
        if ($("#fpolicy").is(":checked")) {
            $("#sendButton").prop("disabled", false);
        } else {
            $("#sendButton").prop("disabled", true);
        }
    });

    let data = document.querySelectorAll(".info");
    const ajaxSend = (formData) => {
        fetch("https://formcarry.com/s/TSPqjN4-kTv", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(function (response) {
                alert("Ваша заявка принята! Ожидайте, в скором времени наши специалисты с Вами свяжутся!");
                data.forEach((element) => { element.value = ""; });
                $("#check").prop("checked", false);
                $("#sendButton").prop("disabled", true);
                localStorage.clear();
            })
            .catch((error) => {alert(error);})
    };

    const forms = $("#thatForm");
    for (let i = 0; i < forms.length; i++) {
        $("#sendButton").click(function (e) {
            e.preventDefault();

            let formData = new FormData(forms[i]);
            formData = Object.fromEntries(formData);

            ajaxSend(formData);
        });
    }

});
