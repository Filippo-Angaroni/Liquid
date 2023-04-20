let imageslidecontainer = document.getElementById("ImagesSlideContainer");
let imageslidecontainer_child = imageslidecontainer.getElementsByTagName("img");
let slidecount = imageslidecontainer_child.length;
let currentindex = 1;
let currentslide = document.getElementById("ImageSlide" + currentindex.toString());
SetSlide(currentindex);

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
    if (slidenumber == 1){
        document.getElementById("HomeImageTitle").textContent = "Distribution";
        document.getElementById("HomeImageDescription").textContent = "Importiamo e distribuiamo vini selezionati con un focus particolare su cantine in Italia, Spagna, Australia e Portogallo.";
        document.getElementById("HomeImageButton").textContent = "Distribution";
    } else if (slidenumber == 2){
        document.getElementById("HomeImageTitle").textContent = "Consulting";
        document.getElementById("HomeImageDescription").textContent = "Assistenza nella progettazione di ristoranti, hotel e wine bar; formazione rete commerciale per aziende operanti nel settore Ho.re.ca";
        document.getElementById("HomeImageButton").textContent = "Consulting";
    }
}