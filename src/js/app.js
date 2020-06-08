const consultOnline = document.querySelector(".health_issues");
const carousel = document.querySelector(".one-time-slick");
const healthTips = document.querySelector(".health_tips");



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
    },
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
    },
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
    },
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
const docTypesArray = [
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
    },
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
    },
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
const docHealthTips = [
    {
        image: "src/images/write_1.jpg"
    },
    {
        image: "src/images/write_2.jpg"
    },
    {
        image: "src/images/write_3.jpg"
    },
    {
        image: "src/images/write_4.jpg"
    },
    {
        image: "src/images/write_1.jpg"
    },
    {
        image: "src/images/write_2.jpg"
    },
    {
        image: "src/images/write_3.jpg"
    },
    {
        image: "src/images/write_4.jpg"
    },
    {
        image: "src/images/write_1.jpg"
    },
    {
        image: "src/images/write_2.jpg"
    },
    {
        image: "src/images/write_3.jpg"
    },
    {
        image: "src/images/write_4.jpg"
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
const showTips = () => {
    let output = "";
    docHealthTips.forEach(
        ({image}) =>
            (output += `

              <div class="card">
                <img class="card--avatar health_link" src=${image} />
                <a class="card--link " href="#">Read</a>
              </div>
              `)
    );
    healthTips.innerHTML = output;
};


document.addEventListener("DOMContentLoaded", showHealthIssues);
document.addEventListener("DOMContentLoaded", showDocs);
document.addEventListener("DOMContentLoaded", showTips);



if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("src/js/serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err));
    });
}
$(function () {
    $("#includedHeader").load("src/html/nav.html");
    $("#includedContent").load("src/html/nav.html");

    $('.one-time-slick').slick({
        dots: false,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
        draggable: true,
        focusOnSelect: false,
        focusOnChange: false,
        lazyLoad: 'ondemand',
        mobileFirst: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                infinite: true,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                infinite: true,
            }
        }, {
            breakpoint: 300,
            settings: {
                slidesToShow: 3,
                infinite: true,
            }
        }]
    });
    $('.health_issues').slick({
        dots: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: true,
        prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
        draggable: true,
        focusOnSelect: false,
        focusOnChange: false,
        lazyLoad: 'ondemand',
        mobileFirst: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                infinite: true,
            }
        }, {
            breakpoint: 300,
            settings: {
                slidesToShow: 3,
                infinite: true,
            }
        }]

    });
    $('.health_tips').slick({
        dots: false,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: true,
        prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
        draggable: true,
        focusOnSelect: false,
        focusOnChange: false,
        lazyLoad: 'ondemand',
        mobileFirst: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                infinite: true,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                infinite: true,
            }
        }, {
            breakpoint: 300,
            settings: {
                slidesToShow: 2,
                infinite: true,
            }
        }]

    });

});
