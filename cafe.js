"use strict";

$(document).ready( () => {
    let total = 0;

    $("ul img").each( (index, img) => {
        const oldURL = $(img).attr("src"); 
        const newURL = $(img).attr("id");  
        
        
        const rolloverImage = new Image();
        rolloverImage.src = newURL;
        
        
        $(img).hover(
            () => $(img).attr("src", newURL), 
            () => $(img).attr("src", oldURL) 
        ); 

        $(img).click( evt => {
            const item = getItem(oldURL);

        
            let order  = $("#order").html();
            if (order == undefined) {
                order = "";
            }

        
            total += item[1];
            order += `<option value="${item[0]}">$${item[1]} - ${item[2]}</option>`;


            $("#order").html( order );
            $("#total").text( `Total: $${total.toFixed(2)}` );
            
            evt.preventDefault();
            
        }); 
    }); 

const getItem = src => {
    let item = [];

    if (src == "images/biscotti.jpg") {
        item = ["biscotti", 1.95, "Biscotti"];
    } else if (src == "images/cappuccino.jpg") {
        item = ["cappuccino", 3.45, "Cappuccino"];
    } else if (src == "images/coffee.jpg") {
        item = ["drip", 1.75, "Drip coffee"];
    } else if (src == "images/espresso.jpg") {
        item = ["espresso", 1.95, "Espresso"];
    } else if (src == "images/latte.jpg") {
        item = ["latte", 2.95, "Latte"];
    } else if (src== "images/scone.jpg") {
        item = ["scone", 2.95, "Scone"];
    }

    return item;  
};

    $("#place_order").click( () => {
        const order = $("#order").text();
        if (order == "") {
            alert ("Order list empty");
        } else {
            $("#order_form").submit();
        }
    }); 
    
    $("#clear_order").click( () => {
        total = 0;
        $("#order").text("");
        $("#total").text("");
    }); 
    
}); 