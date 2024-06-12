function validateAll() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const checkOut = document.getElementById("date");
    const room = document.getElementById("gender");
    const today = new Date();
    const checkOutDate = new Date(date.value); 
    const registerForm = document.getElementById("register-form");

    console.log(name.value);
    console.log(date);
    console.log(gender.value);

    if(name.value.trim() === "") {
        alert("WOI ISI NAMANYA");
    } else if(!phone.value.startsWith("0")) {
        alert("Depannya harus 0 woi");
    } else if(!email.value.endsWith("@gmail.com")){
        alert("Promosi Gmail ni");
    } else if(checkInDate < today) {
        alert("Masa mau check in kemaren tapi pesen hari ini");
    } else if(checkInDate > checkOutDate){
        alert("Check out date harus lebih lama dari check in");
    } else if(room.value === "none"){
        alert("pilih dong mau kamar apa");
    } else{
        // submit form kalau semua kondisi terpenuhi
        reservationForm.submit();
    }
}