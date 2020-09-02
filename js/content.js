setTimeout(avg_price, 3000);
setTimeout(avg_rating, 3000);
setTimeout(displayPrice, 5000);
setTimeout(displayRating, 5000);


function avg_price() {
    let block = document.getElementById("sp_detail2");
    let arr_elements = block.querySelectorAll(".a-size-medium");
    let arr_price = [];
    let sum = 0;
    for (let item of arr_elements) {
        let value = item.innerHTML.slice(1);
        let number = parseFloat(value);
        sum += number;
        arr_price.push(number)
    }
    let avg = parseFloat((sum / arr_price.length).toFixed(2));
    if(!isNaN(avg)){
        storageSet({key: "avg-price", value: avg});
    }
}

async function displayPrice() {
    let avg_price = await storageGet("avg-price");
    if(avg_price !== '') {
        let block_price = document.getElementById("unifiedPrice_feature_div");
        let span = document.createElement('span');
        span.innerHTML = '&#128293' + 'Avg price: ' + '$' + avg_price + '<br>';
        block_price.append(span);
    }
}


function avg_rating() {
    let sum =0; let qty = 0;
    let block = document.getElementById("sp_detail2");
    if(block !== null){
        let arr_class = block.getElementsByClassName("a-icon-star");
        if(arr_class.length > 0){
            for (let item of arr_class) {
                for (let className of item.classList) {
                    switch (className) {
                        case 'a-star-5': sum += 5;qty += 1;break;
                        case 'a-star-4-5': sum += 4.5;qty += 1;break;
                        case 'a-star-4': sum += 4;qty += 1;break;
                        case 'a-star-3-5': sum += 3.5;qty += 1;break;
                        case 'a-star-3': sum += 3;qty += 1;break;
                        case 'a-star-2-5': sum +=2.5;qty += 1;break;
                        case 'a-star-2': sum +=2;qty += 1;break;
                        case 'a-star-1-5': sum +=1.5;qty += 1;break;
                        case 'a-star-1': sum +=1;qty += 1;break;
                        default : sum +=0;qty +=0
                    }
                }
            }
        }
    }
    let avg_rating = parseFloat((sum/qty).toFixed(1));
    if(!isNaN(avg_rating)){
        storageSet({key: "avg-rating", value: avg_rating});
    }
}

async function displayRating() {
    let avg_rating = await storageGet("avg-rating");
    if(avg_rating !== ''){
        let block_rating = document.getElementById("unifiedPrice_feature_div");
        let span = document.createElement('span');
        span.innerHTML = '&#9733' + 'Avg rating: '  + avg_rating;
        block_rating.append(span);
    }
}