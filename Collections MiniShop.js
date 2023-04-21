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

/**
 * 
 * @param {HTMLDivElement} cardsender
 */
function InitializeMiniShop(cardsender){
    const winecount = Object.keys(wines.molino_di_rovescala).length;
    const column_row_number = Math.ceil(Math.sqrt(winecount));
    const shop_container = document.getElementById("MiniWineShop");
    console.log(shop_container.children.length);
    if (shop_container.children.length >= winecount){
        
        return;
    }
    var grid_template_text = "";

    for (var i = 0; i < column_row_number; i++){
        grid_template_text += Math.floor(100/column_row_number-3).toString() + "% ";
    }

    shop_container.classList.add("mini-wine-shop-inside-collection")
    shop_container.style.gridTemplateColumns = grid_template_text;
    shop_container.style.gridTemplateRows = grid_template_text;
    shop_container.style.marginBottom = "-3%";
    shop_container.style.gap = "2%";

    for (let wine = 1; wine < Object.keys(wines.molino_di_rovescala).length + 1; wine++){
        const image = document.createElement('img');
        image.classList.add('image-into-minishop');
        image.src = "Collections/Molino_di_Rovescala/" + wines.molino_di_rovescala["wine" + wine].src;
        shop_container.appendChild(image);
    }
}