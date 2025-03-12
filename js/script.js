// js

let currentIndex = 1;
function nextSlide(){
    const slides = document.querySelector(".slides");
    currentIndex = (currentIndex + 1) % 3;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(nextSlide, 3000);

function updateResult() {
    document.getElementById("resUser").innerText = document.getElementById("name").value;
    document.getElementById("resName").innerText = document.getElementById("name").value;
    document.getElementById("resDob").innerText = document.getElementById("dob").value;
    document.getElementById("resGender").innerText = document.querySelector('input[name="gender"]:checked').value;
    document.getElementById("resMessage").innerText = document.getElementById("message").value;
    
    let currentTime = new Date().toString();
    document.getElementById("time").innerText = currentTime;
}

function handleSubmit(event) {
    event.preventDefault();
    updateResult();
}

document.getElementById("messageForm").addEventListener("button", handleSubmit);
