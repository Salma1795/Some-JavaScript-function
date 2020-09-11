let bookmarkNameInput = document.getElementById("bookmarkNameInput");

let AddBtn=document.getElementById("AddBtn");

let bookmarks;
//check if there is any previous data or not
if (localStorage.getItem("ourBookmarks") == null) { /// no new data
    bookmarks = [];
}
else  // existing data
{
    bookmarks = JSON.parse(localStorage.getItem("ourBookmarks"));
    displayBookmark();
}

function addBookmarks() {
    let bookmark =  bookmarkNameInput.value;
   
    bookmarks.push(bookmark);
    localStorage.setItem("ourBookmarks", JSON.stringify(bookmarks));
    displayBookmark();
    clearForm();
}

function displayBookmark() {
    let cartoona = "";
    for (let i = 0; i < bookmarks.length; i++) {
        cartoona += `<tr>
        <td>${bookmarks[i]}</td>
        <td><button onclick="deleteBookmark(${i})" class="btn btn-danger">Delete</button></td>
        </tr>`;
    }
    document.getElementById("table-body").innerHTML = cartoona;
}

function clearForm() {
    bookmarkNameInput.value = "";
}

function deleteBookmark(index) {
    bookmarks.splice(index, 1);
    localStorage.setItem("ourBookmarks", JSON.stringify(bookmarks));
    displayBookmark();
}

AddBtn.addEventListener("click",addBookmarks);

//====================== Colory Section ================================

let colorySection = document.getElementById("colorySection");
let music = document.getElementById("music");
colorySection.addEventListener("mousemove", function () {

    let color1 = Math.round(Math.random() * 255);
    let color2 = Math.round(Math.random() * 255);
    let color3 = Math.round(Math.random() * 255);

    colorySection.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
    music.play();

});

colorySection.addEventListener("mouseleave", function () {
    colorySection.style.backgroundColor = "white";
    music.pause();
});

//===================== Time Section ===============================
let daysDiv = document.getElementById("days");

let hoursDiv = document.getElementById("hours");

let minutesDiv = document.getElementById("minutes");

let secondsDiv = document.getElementById("seconds");

let counter = new Date(2020, 11, 1, 0, 1, 0);

let timer = setInterval(function () {
    let now = new Date();
    let d = counter - now;

    let days = Math.floor(d / (1000 * 60 * 60 * 24));
    let hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((d % (1000 * 60)) / 1000);

    daysDiv.innerHTML = days;
    hoursDiv.innerHTML = hours;
    minutesDiv.innerHTML = minutes;
    secondsDiv.innerHTML = seconds;

    if (d <= 0) {
        clearInterval(timer);
    }
}, 1000);

//====================RGB colory Section========

let RGBSection = document.getElementById("RGBSection");

RGBSection.addEventListener("mousemove", function () {

    let color1 = Math.round(Math.random() * 255);
    let color2 = Math.round(Math.random() * 255);
    let color3 = Math.round(Math.random() * 255);

    RGBSection.style.backgroundColor = `rgb(${color1},${color2},${color3})`;

});

RGBSection.addEventListener("mouseleave", function () {
    RGBSection.style.backgroundColor = "white";
});

//=========================== Validation form section ===

let nameInput = document.getElementById("nameInput");

let emailInput = document.getElementById("emailInput");

let phoneInput = document.getElementById("phoneInput");

let massegeInput = document.getElementById("massegeInput");

let nameInputAlert = document.getElementById("nameInputAlert");

let emailInputAlert = document.getElementById("emailInputAlert");

let phoneInputAlert = document.getElementById("phoneInputAlert");

//validate name input
let nameRegex = /^[A-Z][a-z]{3,8}$/;

function validateUserName() {

    if (nameRegex.test(nameInput.value) == true) {
        nameInputAlert.classList.replace("d-block", "d-none");
        nameInput.classList.add("is-valid");
        nameInput.classList.remove("is-invalid");

        return true;

    }
    else {
        nameInputAlert.classList.replace("d-none", "d-block");
        nameInput.classList.add("is-invalid");
        nameInput.classList.remove("is-valid");

        return false;
    }
}

nameInput.addEventListener("keyup", validateUserName);

// validate email input

let emailRegex = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;

function validateEmailInput() {
    if (emailRegex.test(emailInput.value) == true) {
        emailInputAlert.classList.replace("d-block", "d-none");
        emailInput.classList.add("is-valid");
        emailInput.classList.remove("is-invalid");

        return true;
    }
    else {
        emailInputAlert.classList.replace("d-none", "d-block");
        emailInput.classList.add("is-invalid");
        emailInput.classList.remove("is-valid");

        return false;
    }
}
emailInput.addEventListener("keyup", validateEmailInput);

//validate phone number

let phoneRegex = /^(010|011|012)[0-9]{8}$/;

function validatePhoneInput() {
    if (phoneRegex.test(phoneInput.value) == true) {
        phoneInputAlert.classList.replace("d-block", "d-none");
        phoneInput.classList.add("is-valid");
        phoneInput.classList.remove("is-invalid");

        return true;
    }
    else {
        phoneInputAlert.classList.replace("d-none", "d-block");
        phoneInput.classList.add("is-invalid");
        phoneInput.classList.remove("is-valid");

        return false;
    }
}
phoneInput.addEventListener("keyup", validatePhoneInput);