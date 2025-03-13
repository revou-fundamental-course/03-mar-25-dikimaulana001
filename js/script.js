// js

let slideIndex = 0;
function showSlides() {
    let slides = document.querySelectorAll(".slides");
        slides.forEach(slide => slide.style.display = "none");
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000);
}
showSlides();



function updateResult() {
    let isValid = true;
    
    let nama = document.getElementById("name").value.trim();
    if (nama === "") {
        document.getElementById('name-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('name-error').style.display = 'none';
    }

    let tanggal = document.getElementById("dob").value;
    if (tanggal === "") {
        document.getElementById('dob-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('dob-error').style.display = 'none';
    }

    let pesan = document.getElementById("message").value.trim();
    if (pesan === "") {
        document.getElementById('pesan-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('pesan-error').style.display = 'none';
    }

    if (isValid){
        document.getElementById("resUser").innerText = document.getElementById("name").value;
        document.getElementById("resName").innerText = document.getElementById("name").value;
        document.getElementById("resDob").innerText = document.getElementById("dob").value;
        document.getElementById("resGender").innerText = document.querySelector('input[name="gender"]:checked').value;
        document.getElementById("resMessage").innerText = document.getElementById("message").value;
        
        let currentTime = new Date().toString();
        document.getElementById("time").innerText = currentTime;
    }
        
        
}