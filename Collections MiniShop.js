const wines = {
    molino_di_rovescala : {
        wine1 : {
            src: "pinot_nero_rose.png"
        },
        wine2 : {
            src: "pinot_nero_bianco.png"
        },
        wine3 : {
            src: "bonarda.png"
        },
        wine4 : {
            src: "vigna_delle_olive.png"
        },
        wine5 : {
            src: "vigna_del_felice.png"
        },
        wine6 : {
            src: "vigna_del_madone.png"
        },
        wine7 : {
            src: "vigna_del_provomme.png"
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

/**
 * 
 * @param {HTMLDivElement} cardsender
 */
function InitializeMiniShop(cardsender){
    if (collectionelementlist.length == 0){
        for (let idnum = 1; idnum < Object.keys(collectionidlist).length + 1 ; idnum++){
            collectionelementlist.push(GetElementById(collectionidlist["id" + idnum]).parentElement);
        }
    } else {
        if (cardsender != lastcard){
            // ReInizializeCollections();
            // collectionelementlist = [];
            // InitializeMiniShop(cardsender);
        }
        return;
    }
    lastcard = cardsender;
    const winecount = Object.keys(wines.molino_di_rovescala).length;
    const column_row_number = Math.ceil(Math.sqrt(winecount));
    const shop_container = cardsender.children[0];
    const cardsender_number = shop_container.id.toString().at(-1);
    if (shop_container.children.length != 0){
        return;
    }
    const currentrow = cardsender.parentElement;
    const currentrownumber = currentrow.id.toString().at(-1);

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
    
    let addaftercurrentcard = 0;
    //console.log(collectionelementlist);
    let _collectionelementlist = [];
    for (i = 0; i < collectionelementlist.length; i++){
        _collectionelementlist[i] = collectionelementlist[i];
    }
    _collectionelementlist.splice(cardsender_number-1, 1);
    console.log(_collectionelementlist);
    for (let rownum = 0; rownum < Object.keys(collectionsrow).length; rownum++){
        const row = GetElementById(collectionsrow["row"+(rownum+1)]);
        
        //console.log(_collectionelementlist);
        if (row != currentrow){
            for (let cardnum = 0; cardnum < 3; cardnum++){
                
                const _currentcard = _collectionelementlist[rownum*3 + cardnum + addaftercurrentcard];

                //console.log(rownum*3 + cardnum + addaftercurrentcard);
                row.append(_currentcard);
            }
        } else {
            addaftercurrentcard -= 3;
        }
        
    }

    
    var grid_template_text = "";
    for (var i = 0; i < column_row_number; i++){
        grid_template_text += Math.floor(100/column_row_number-3).toString() + "% ";
    }

    shop_container.className = "mini-wine-shop-inside-collection-hover";
    shop_container.parentElement.className = "collection-card-hover center-bottom-div";
    shop_container.parentElement.children[1].className = "collection-card-image-hover";
    shop_container.parentElement.children[2].className = "collection-card-image-hover";
    shop_container.style.gridTemplateColumns = grid_template_text;
    shop_container.style.gridTemplateRows = grid_template_text;
    shop_container.style.marginBottom = "-3%";
    shop_container.style.gap = "2%";
    for (let wine = 1; wine < winecount + 1; wine++){
        const image = document.createElement('img');
        image.className = 'image-into-minishop';
        image.src = "Collections/Molino_di_Rovescala/" + wines.molino_di_rovescala["wine" + wine].src;
        shop_container.appendChild(image);
    }
}


function ReInitializeCollections(){
    /**
     * @param {HTMLDivElement} card
     */
    let _collectionelementlist = [];
    for (i = 0; i < collectionelementlist.length; i++){
        _collectionelementlist[i] = collectionelementlist[i];
    }
    for (let rownum = 0; rownum < Object.keys(collectionsrow).length; rownum++){
        const row = GetElementById(collectionsrow["row"+(rownum+1)]);
        //console.log(_collectionelementlist);
        if (rownum%2 == 0){
            for (let cardnum = 0; cardnum < 2; cardnum++){                
                row.append(_collectionelementlist[(rownum/2)*5+cardnum]);
                //console.log(_collectionelementlist[(rownum/2)*5+cardnum]);
                row.lastElementChild.className = "collection-card center-bottom-div";
                row.lastElementChild.children[0].textContent = "";
                row.lastElementChild.children[0].className = "mini-wine-shop-inside-collection";
                row.lastElementChild.children[1].className = "center-center-div";
                row.lastElementChild.children[2].className = "collection-card-image";
                
            }
        } else {
            for (let cardnum = 0; cardnum < 3; cardnum++){
                row.append(_collectionelementlist[((rownum-1)/2)*5+2+cardnum]);
                //console.log(_collectionelementlist[((rownum-1)/2)*5+2+cardnum]);
                row.lastElementChild.className = "collection-card center-bottom-div";
                row.lastElementChild.children[0].textContent = "";
                row.lastElementChild.children[0].className = "mini-wine-shop-inside-collection";
                row.lastElementChild.children[1].className = "center-center-div";
                row.lastElementChild.children[2].className = "collection-card-image";
            }
        }
    }
    collectionelementlist = [];
}