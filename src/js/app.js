const consultOnline = document.querySelector(".consult_online");
const carousel = document.querySelector("#slick");

const healthIssuesArrray = [
    {
        name: "Acne,pimple or skin issues",
        image: "src/images/1.jpg"
    },
    {
        name: "Cold,cough or fever",
        image: "src/images/2.jpg"
    },
    {
        name: "Chikld not feeling well",
        image: "src/images/3.jpg"
    },
    {
        name: "Depression or anxiety",
        image: "src/images/4.jpg"
    }
];
const docTypesArray =[
    {
        name: "Dentist",
        image: "src/images/doc_1.jpg"
    },
    {
        name: "Gynaecology",
        image: "src/images/doc_2.jpg"
    },
    {
        name: "Dietitian",
        image: "src/images/doc_3.jpg"
    },
    {
        name: "Therapist",
        image: "src/images/doc_4.jpg"
    },
    {
        name: "General Surgeon",
        image: "src/images/doc_5.jpg"
    },
    {
        name: "Orthopaedics",
        image: "src/images/doc_6.jpg"
    },
    {
        name: "General physician",
        image: "src/images/doc_7.jpg"
    },
    {
        name: "Orthopaedics",
        image: "src/images/doc_6.jpg"
    }
]
const showHealthIssues = () => {
    let output = "";
    healthIssuesArrray.forEach(
        ({name, image}) =>
            (output += `

              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Consult</a>
              </div>
              `)
    );
    consultOnline.innerHTML = output;
};
const showDocs = () => {
    let output = "";
    docTypesArray.forEach(
        ({name, image}) =>
            (output += `

              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Consult</a>
              </div>
              `)
    );
    carousel.innerHTML = output;
};


document.addEventListener("DOMContentLoaded", showHealthIssues);
document.addEventListener("DOMContentLoaded", showDocs);


if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("src/js/serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err));
    });
}
$(function () {
    $("#includedContent").load("src/html/nav.html");
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        cssEase: "ease",
        autoplay: false,
        autoplaySpeed: 3000,
        nextArrow: '<i class="icon fa-arrow-right nextArrowBtn"></i>',
        prevArrow: '<i class="icon fa-arrow-left prevArrowBtn"></i>',
        dots:false,
        centerMode: true,
    });
});
