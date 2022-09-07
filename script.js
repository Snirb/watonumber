function link() {
    let i = "https://web.whatsapp.com/send?phone=XXXX&text&type=phone_number&app_absent=0"
    let num = document.getElementById("num");
    location.replace("https://web.whatsapp.com/send?phone=+972" + num.value + "&text&type=phone_number&app_absent=0");
}