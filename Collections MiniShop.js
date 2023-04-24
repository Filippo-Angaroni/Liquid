const wines = {
    molino_di_rovescala : {
        wine1 : {
            src: "Collections/Molino di Rovescala/pinot_nero_rose.png"
        },
        wine2 : {
            src: "Collections/Molino di Rovescala/pinot_nero_bianco.png"
        },
        wine3 : {
            src: "Collections/Molino di Rovescala/bonarda.png"
        },
        wine4 : {
            src: "Collections/Molino di Rovescala/vigna_delle_olive.png"
        },
        wine5 : {
            src: "Collections/Molino di Rovescala/vigna_del_felice.png"
        },
        wine6 : {
            src: "Collections/Molino di Rovescala/vigna_del_madone.png"
        },
        wine7 : {
            src: "Collections/Molino di Rovescala/vigna_del_provomme.png"
        }
    },

    systers_run : {
        wine1 : {
            src: "Collections/Sister's Run/Calvary Hill 2018.png"
        },
        wine2 : {
            src: "Collections/Sister's Run/Cow's Corner 2019.png"
        }
    },

    la_ceriola : {
        wine1 : {
            src: "Collections/La Ceriola/Spumante Doc Extra Dry Selezione Oro 2018.png"
        },
        wine2 : {
            src: "Collections/La Ceriola/Spumante Docg Selezione Oro.png"
        }
    },

    heirloom_vineyards : {
        wine1 : {
            src: "Collections/Heirloom Vineyards/Coonawarra 2019.png"
        },
        wine2 : {
            src: "Collections/Heirloom Vineyards/Adelaide Hills 2020.png"
        }
    },

    dandelion_vineyards : {
        wine1 : {
            src: "Collections/Dandelion Vineyards/Lionheart of the Barossa 2018.png"
        },
        wine2 : {
            src: "Collections/Dandelion Vineyards/Garden of the Eden Valley 2021.png"
        },
        wine3 : {
            src: "Collections/Dandelion Vineyards/Managerie of the Barossa 2019.png"
        },
        wine4 : {
            src: "Collections/Dandelion Vineyards/Lion's Tooth of Mclaren Vale 2019.png"
        },
        wine5 : {
            src: "Collections/Dandelion Vineyards/Fairytale of the Barossa Rosé 2020.png"
        }
    },

    cien_y_pico : {
        wine1 : {
            src: "Collections/Cien Y Pico/Doble Pasta 2019.png"
        },
        wine2 : {
            src: "Collections/ien Y Pico/Vina La Ceja 2021.png"
        }
    },

    azienda_agricola_folini : {
        wine1 : {
            src: "Collections/Azienda Agricola Folini/Dos Bel 2017.png"
        },
        wine2 : {
            src: "Collections/Azienda Agricola Folini/L'Enrico Riserva 2018.png"
        }
    }



}

const collectionsrow = {
    row1: "CollectionsRow1",
    row2: "CollectionsRow2",
    row3: "CollectionsRow3"
}

const collectionidlist = {
    id1: "MiniWineShop1",
    id2: "MiniWineShop2",
    id3: "MiniWineShop3",
    id4: "MiniWineShop4",
    id5: "MiniWineShop5",
    id6: "MiniWineShop6",
    id7: "MiniWineShop7"
}

let collectionelementlist = [];

function GetElementById(id){
    return document.getElementById(id);
}

var lastcard;
let afterclick = false;

/**
 * 
 * @param {HTMLDivElement} cardsender
 */
function InitializeMiniShop(cardsender){
    //CREATE "BACKUP" OF CARDS AND CHECK IF THE "BACKUP" IS EMPTY
    if (collectionelementlist.length == 0){
        for (let idnum = 1; idnum < Object.keys(collectionidlist).length + 1 ; idnum++){
            collectionelementlist.push(GetElementById(collectionidlist["id" + idnum]).parentElement);
        }
    } else {
        console.log(afterclick);
        if (cardsender != lastcard){
            ReInitializeCollections();
            InitializeMiniShop(cardsender);
        }
        afterclick = false;
        return;
    }
    //SETTING GLOBAL VARIABLE
    lastcard = cardsender;
    const shop_container = cardsender.children[0];
    const cardsender_number = shop_container.id.toString().at(-1);
    const current_wines_collection = Object.values(wines)[cardsender_number-1];
    const winecount = Object.keys(current_wines_collection).length;
    const column_row_number = Math.ceil(Math.sqrt(winecount));
    
    if (shop_container.children.length != 0){
        return;
    }

    const currentrow = cardsender.parentElement;
    const currentrownumber = currentrow.id.toString().at(-1);

    //REMOVE CARDS AFTER FIND ELEMENTS FOR THE SELECTED ONE
    for (let rownum = 1; rownum < Object.keys(collectionsrow).length+1; rownum++){
        const row = GetElementById(collectionsrow["row"+rownum]);
        for (let cardnum = 0; cardnum < 3 - (rownum%2); cardnum++){
            const _currentcard = row.children[0];
            if (_currentcard != cardsender && _currentcard != null){
                _currentcard.remove();
            } else {
                try{
                    row.children[1].remove();
                } catch {
                    continue;
                }
            }
        }
    }
    
    //COPY OF THE BACKUP
    let addaftercurrentcard = 0;
    let _collectionelementlist = [];
    for (i = 0; i < collectionelementlist.length; i++){
        _collectionelementlist[i] = collectionelementlist[i];
    }
    _collectionelementlist.splice(cardsender_number-1, 1);

    //REPLACE CARDS AFTER DELETE THEM
    for (let rownum = 0; rownum < Object.keys(collectionsrow).length; rownum++){
        const row = GetElementById(collectionsrow["row"+(rownum+1)]);
            if (row != currentrow){
            for (let cardnum = 0; cardnum < 3; cardnum++){
                /**
                 * @param {HTMLDivElement} _currentcard
                 */
                let _currentcard = _collectionelementlist[rownum*3 + cardnum + addaftercurrentcard];
                _currentcard.className = "collection-card-hover-other center-bottom-div";
                row.append(_currentcard);
            }
        } else {
            addaftercurrentcard -= 3;
        }
        
    }

    //DEFINE LENGHT AND HEIGHT OF WINES GRIDBOX
    var grid_template_text = "";
    for (var i = 0; i < Math.ceil(Math.sqrt(winecount)); i++){
        grid_template_text += Math.floor(100/Math.ceil(Math.sqrt(winecount)) - 3).toString() + "% ";
    }

    //SHOPCONTAINTER AND CONTENT - STYLE AND CLASS SETTING
    shop_container.className = "mini-wine-shop-inside-collection-hover";
    shop_container.style.padding = "0px";
    shop_container.parentElement.className = "collection-card-hover";
    shop_container.parentElement.children[1].className = "collection-card-image-hover";
    shop_container.parentElement.children[2].className = "collection-card-image-hover";
    const newimagecarddiv = document.createElement('img');
    newimagecarddiv.className = "collection-card-image";
    newimagecarddiv.style.padding = "0px";
    newimagecarddiv.style.height = "100%";
    newimagecarddiv.style.width = "30%";
    newimagecarddiv.style.borderTopRightRadius = "0px";
    newimagecarddiv.style.borderBottomRightRadius = "0px";
    newimagecarddiv.style.borderTopLeftRadius = "1.5vw";
    newimagecarddiv.style.borderBottomLeftRadius = "1.5vw";
    newimagecarddiv.src = shop_container.parentElement.children[2].src;
    shop_container.appendChild(newimagecarddiv);

    const newimagecollectioncarddiv = document.createElement('div');
    newimagecollectioncarddiv.className = "mini-wine-shop";
    shop_container.appendChild(newimagecollectioncarddiv);

    newimagecollectioncarddiv.style.gridTemplateColumns = grid_template_text;
    newimagecollectioncarddiv.style.gridTemplateRows = grid_template_text;
    newimagecollectioncarddiv.style.padding = "0px";
    newimagecollectioncarddiv.style.gap = "2%";
    

    //BACKGROUND GRAY DIV
    const newdiv = document.createElement('div');
    newdiv.style.background = "rgba(50, 50, 50, .3)";
    newdiv.style.position = "absolute";
    newdiv.style.zIndex = "1";
    newdiv.style.height = "100%";
    newdiv.style.width = "100%";
    newdiv.style.filter = "blur(50px)";
    newdiv.onclick = function(){ReInitializeCollections()};
    shop_container.parentElement.parentElement.parentElement.insertBefore(newdiv, shop_container.parentElement.parentElement.parentElement.children[0]);
    
    //SET THE WINES IMAGES FOR THE CURRENT CARD
    for (let wine = 1; wine < winecount + 1; wine++){
        const image = document.createElement('img');
        image.className = 'image-into-minishop';
        //console.log(current_wines_collection[cardsender_number-1]);
        image.src = current_wines_collection["wine" + wine].src;
        newimagecollectioncarddiv.appendChild(image);
    }
    
}


function ReInitializeCollections(){
    /**
     * @param {HTMLDivElement} card
     */
    //COPY OF THE BACKUP
    let _collectionelementlist = [];
    for (i = 0; i < collectionelementlist.length; i++){
        _collectionelementlist[i] = collectionelementlist[i];
    }
    
    //ROW'S LOOP
    for (let rownum = 0; rownum < Object.keys(collectionsrow).length; rownum++){
        const row = GetElementById(collectionsrow["row"+(rownum+1)]);
        if (rownum == 0){
            row.parentElement.children[0].remove();
        }

        //PLACE 2 CARD
        if (rownum%2 == 0){
            for (let cardnum = 0; cardnum < 2; cardnum++){                
                row.append(_collectionelementlist[(rownum/2)*5+cardnum]);
                row.lastElementChild.className = "collection-card center-bottom-div";
                row.lastElementChild.children[0].textContent = "";
                row.lastElementChild.children[0].className = "mini-wine-shop-inside-collection";
                row.lastElementChild.children[1].className = "center-center-div";
                row.lastElementChild.children[2].className = "collection-card-image";                
            }

            //PLACE 3 CARD
        } else {
            for (let cardnum = 0; cardnum < 3; cardnum++){
                row.append(_collectionelementlist[((rownum-1)/2)*5+2+cardnum]);
                row.lastElementChild.className = "collection-card center-bottom-div";
                row.lastElementChild.children[0].textContent = "";
                row.lastElementChild.children[0].className = "mini-wine-shop-inside-collection";
                row.lastElementChild.children[1].className = "center-center-div";
                row.lastElementChild.children[2].className = "collection-card-image";
            }
        }
    }

    //CLEAR BACKUP
    collectionelementlist = [];
}