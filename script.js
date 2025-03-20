function submitClick(){
    let enter = document.getElementById("enter").value
    let result = 0
    let value = 0

    let currency1 = document.getElementById("enter-currency").value
    let currency2 = document.getElementById("result-currency").value

    if(currency1 == currency2){
        alert("Similar")
        return
    }

    if(enter < 0){
        alert("Negative")
        return
    }

    if(enter == 0){
        alert("NULL")
        return
    }

    switch(currency1){
        case "usd":
            value = enter
            break
        case "eur":
            value = enter * 1.08
            break
        case "gbp":
            value = enter * 1.29
            break
        case "pln":
            value = enter * 0.26
            break
        case "krw":
            value = enter * 0.00068
            break
        case "cny":
            value = enter * 0.14
            break
    }

    switch(currency2){
        case "usd":
            result = value * 1
            break
        case "eur":
            result = value * 0.92
            break
        case "gbp":
            result = value * 0.77
            break
        case "pln":
            result = value * 3.87
            break
        case "krw":
            result = value * 1467.40
            break
        case "cny":
            result = value * 7.23
            break
    }
    enter = document.getElementById("enter").value
    document.getElementById("result").value = result;
}

function clearClick(){
    document.getElementById("enter").value = 0
    document.getElementById("result").value = 0
    enter = 0
    result = 0
}
