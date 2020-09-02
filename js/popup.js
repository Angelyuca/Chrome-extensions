viewPrice();
viewRating();

async function viewPrice() {
    let avg_price = await storageGet("avg-price");
    if(avg_price !== undefined){
    let view = document.getElementById("view-price");
    view.innerHTML = '&#164 ' +'Avg price: ' + '$' + avg_price;
    }
}

async function viewRating() {
    let avg_rating = await storageGet("avg-rating");
    if(avg_rating !== undefined){
        let view = document.getElementById("view-rating");
        view.innerHTML = '&#9733 ' +'Avg rating: ' + '$' + avg_rating;
    }
}




