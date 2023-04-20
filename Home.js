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

function RightSlide(){
    if (currentindex + 1 > slidecount){
        currentindex = 1;
    } else {
        currentindex += 1;
    }
    currentslide.style.display = "none";
    SetSlide(currentindex);
}

function SetSlide(slidenumber){
    currentslide = document.getElementById("ImageSlide" + slidenumber.toString());
    currentslide.style.display = "block";
    currentslide.style.zIndex = -1;
    let HomeImageTitle = document.getElementById("HomeImageTitle");
    let HomeImageDescription = document.getElementById("HomeImageDescription");
    let HomeImageButton = document.getElementById("HomeImageButton");
    const rgb_dark = "rgb(0, 0, 0, 1)";
    if (slidenumber == 1){
        HomeImageTitle.textContent = "Distribution";
        HomeImageDescription.textContent = "Importiamo e distribuiamo vini selezionati con un focus particolare su cantine in Italia, Spagna, Australia e Portogallo.";
        HomeImageButton.textContent = "Distribution";
    } else if (slidenumber == 2){
        HomeImageTitle.textContent = "Consulting";
        HomeImageDescription.textContent = "Assistenza nella progettazione di ristoranti, hotel e wine bar; formazione rete commerciale per aziende operanti nel settore Ho.re.ca";
        HomeImageButton.textContent = "Consulting";
    } else if (slidenumber == 3){
        HomeImageTitle.textContent = "Education";
        HomeImageTitle.style.color = rgb_dark;
        HomeImageDescription.textContent = "Training in ambito Food & Beverage rivolto a personale di sala e cucina; percorsi didattici dedicati per Università, ITS, wine schools";
        HomeImageDescription.style.color = rgb_dark;
        HomeImageButton.textContent = "Education";
    }
}