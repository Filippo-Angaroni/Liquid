//SLIDECONTENT OBJECT
const slidecontent = {
    slide1 : {
        title: "Distribution",
        description: "Importiamo e distribuiamo vini selezionati con un focus particolare su cantine in Italia, Spagna, Australia e Portogallo.",
        buttontext: "Dustribution",
        buttonlink: "https://www.tucciateliergastronomico.it/pages/dsitribution"
    },
    slide2 : {
        title: "Consulting",
        description: "Assistenza nella progettazione di ristoranti, hotel e wine bar; formazione rete commerciale per aziende operanti nel settore Ho.re.ca",
        buttontext: "Consulting",
        buttonlink: "https://www.tucciateliergastronomico.it/pages/consulting"
    },
    slide3 : {
        title: "Education",
        description: "Training in ambito Food & Beverage rivolto a personale di sala e cucina; percorsi didattici dedicati per Università, ITS, wine schools",
        buttontext: "Education",
        buttonlink: "https://www.tucciateliergastronomico.it/pages/education"
    }
}

//WINERIES COLLECTION OBJECT
const wineries = {
    winery1 : {
        name: "Molino di Rovellasca",
        src: "https://cdn.shopify.com/s/files/1/0566/5285/7533/collections/PEOPLE_-_MOLINO_DI_ROVESCALA_2.jpg?v=1679321091",
        link: "https://www.tucciateliergastronomico.it/collections/molino-di-rovescala"
    },
    winery2 : {
        name: "Sister's Run",
        src: "https://cdn.shopify.com/s/files/1/0566/5285/7533/collections/Sister_sRun_logo_-_simple_png.webp?v=1679499152",
        link: "https://www.tucciateliergastronomico.it/collections/sisters-run"
    },
    winery3 : {
        name: "Il Podere alla Quercia",
        src: "https://cdn.shopify.com/s/files/1/0566/5285/7533/collections/LaCeriola1482.jpg?v=1679500058",
        link: "https://www.tucciateliergastronomico.it/collections/il-podere-alla-quercia-la-ceriola"
    },
    winery4 : {
        name: "Heirloom Vineyards",
        src: "https://cdn.shopify.com/s/files/1/0566/5285/7533/collections/IMG_3831_grande_65cfdc3a-c6cd-46aa-af24-171790b96bc1.jpg?v=1679331550",
        link: "https://www.tucciateliergastronomico.it/collections/heirloom-vineyards"
    },
    windery5 : {
        name: "Dandelion Vineyards",
        src: "https://cdn.shopify.com/s/files/1/0566/5285/7533/collections/PEOPLE_-_DANDELION_VINEYARDS_1.png?v=1679047004",
        link: "https://www.tucciateliergastronomico.it/collections/dandelion-vineyards"
    },
    windery6 : {
        name: "Cien Y Pico",
        src: "https://cdn.shopify.com/s/files/1/0566/5285/7533/collections/PEOPLE_-_CIEN_Y_PICO_1.png?v=1679319361",
        link: "https://www.tucciateliergastronomico.it/collections/cien-y-pico"
    },
    winery7 : {
        name: "Azienda Agricola Folini",
        src: "https://cdn.shopify.com/s/files/1/0566/5285/7533/collections/PEOPLE_-_FOLINI_1.png?v=1679046423",
        link: "https://www.tucciateliergastronomico.it/collections/azienda-agricola-folini"
    }

}

function PlaceCardCollectionContent(){
    let cardnumber = 1;
    for (const _winery in wineries){
        document.getElementById("CardCollectionImage" + cardnumber.toString()).parentElement.onclick = function(){window.open(wineries[_winery.toString()].link)};
        document.getElementById("CardCollectionText" + cardnumber.toString()).textContent = wineries[_winery.toString()].name;
        document.getElementById("CardCollectionImage" + cardnumber.toString()).src = wineries[_winery.toString()].src;
        cardnumber++;
    }
}
PlaceCardCollectionContent();


let imageslidecontainer = document.getElementById("ImagesSlideContainer");
let imageslidecontainer_child = imageslidecontainer.getElementsByTagName("img");
let slidecount = imageslidecontainer_child.length;
let currentindex = 1;
let currentslide = document.getElementById("ImageSlide" + currentindex.toString());
SetSlide(currentindex);

//SCROLL TO LEFT THE HOME SLIDE
function LeftSlide(){
    if (currentindex - 1 <= 0){
        currentindex = slidecount;
    } else {
        currentindex -= 1;
    }
    currentslide.style.display = "none";
    SetSlide(currentindex);    
}

//SCROLL TO RIGHT THE HOME SLIDE
function RightSlide(){
    if (currentindex + 1 > slidecount){
        currentindex = 1;
    } else {
        currentindex += 1;
    }
    currentslide.style.display = "none";
    SetSlide(currentindex);
}

//SET SLIDE AFTER SCROLLING
function SetSlide(slidenumber){
    currentslide = document.getElementById("ImageSlide" + slidenumber.toString());
    currentslide.style.display = "block";
    currentslide.style.zIndex = -1;
    let HomeImageTitle = document.getElementById("HomeImageTitle");
    let HomeImageDescription = document.getElementById("HomeImageDescription");
    let HomeImageButton = document.getElementById("HomeImageButton");
    const rgb_dark_title = "rgba(0, 0, 0, .9)";
    const rgb_dark_descritpion = "rgba(0, 0, 0, .8)";
    const rgb_light_title = "rgb(255, 255, 255, .9)";
    const rgb_light_description = "rgba(235, 235, 235, .8)";

    HomeImageTitle.textContent = slidecontent["slide" + slidenumber.toString()].title;
    HomeImageDescription.textContent = slidecontent["slide" + slidenumber.toString()].description;
    HomeImageButton.textContent = slidecontent["slide" + slidenumber.toString()].buttontext;
    HomeImageButton.href = slidecontent["slide" + slidenumber.toString()].buttonlink;
    if (slidenumber == 3){
        HomeImageTitle.style.color = rgb_dark_title;
        HomeImageDescription.style.color = rgb_dark_descritpion;
        HomeImageButton.style.color = rgb_dark_title;
    } else {
        HomeImageTitle.style.color = rgb_light_title;
        HomeImageDescription.style.color = rgb_light_description; 
        HomeImageButton.style.color = rgb_light_title;
    }
}

