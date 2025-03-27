let isCurrencyAll = false;

function submitClick(){
    let enter = document.getElementById("enter").value
    let result = 0
    let value = 0

    let currency1 = document.getElementById("enter-currency").value
    let currency2 = document.querySelectorAll("#result-currency").value
    
    if(currency1 == currency2){
        alert("You enter the same valut!")
        return
    }

    if(enter < 0){
        alert("You can’t enter negative value")
        return
    }

    if(enter == 0){
        alert("You can’t enter zero")
        return
    }

    let rates = {
        "usd": 1, "eur": 1.08, "gbp": 1.29, 
        "pln": 0.26, "krw": 0.00068, "cny": 0.14
    };
    value = enter * rates[currency1];

    if(isCurrencyAll == false){
        let exchange = {
            "usd": 1, "eur": 0.92, "gbp": 0.77, 
            "pln": 3.87, "krw": 1467.40, "cny": 7.23
        };
        result = value * exchange[document.querySelectorAll("#result-currency")[0].value];
        document.getElementById("result").value = result;
    }else{
        switch(currency1){
            case "usd":
                document.querySelectorAll("#result-currency")[2].value = "eur"
                document.querySelectorAll("#result-currency")[1].value = "gbp"
                document.querySelectorAll("#result-currency")[3].value = "pln"
                document.querySelectorAll("#result-currency")[4].value = "krw"
                document.querySelectorAll("#result-currency")[5].value = "cny"
                break
            case "eur":
                document.querySelectorAll("#result-currency")[2].value = "usd"
                document.querySelectorAll("#result-currency")[1].value = "gbp"
                document.querySelectorAll("#result-currency")[3].value = "pln"
                document.querySelectorAll("#result-currency")[4].value = "krw"
                document.querySelectorAll("#result-currency")[5].value = "cny"
                break
            case "gbp":
                document.querySelectorAll("#result-currency")[2].value = "eur"
                document.querySelectorAll("#result-currency")[1].value = "usd"
                document.querySelectorAll("#result-currency")[3].value = "pln"
                document.querySelectorAll("#result-currency")[4].value = "krw"
                document.querySelectorAll("#result-currency")[5].value = "cny"
                break
            case "pln":
                document.querySelectorAll("#result-currency")[2].value = "eur"
                document.querySelectorAll("#result-currency")[1].value = "gbp"
                document.querySelectorAll("#result-currency")[3].value = "usd"
                document.querySelectorAll("#result-currency")[4].value = "krw"
                document.querySelectorAll("#result-currency")[5].value = "cny"
                break
            case "krw":
                document.querySelectorAll("#result-currency")[2].value = "eur"
                document.querySelectorAll("#result-currency")[1].value = "gbp"
                document.querySelectorAll("#result-currency")[3].value = "pln"
                document.querySelectorAll("#result-currency")[4].value = "usd"
                document.querySelectorAll("#result-currency")[5].value = "cny"
                break
            case "cny":
                document.querySelectorAll("#result-currency")[2].value = "eur"
                document.querySelectorAll("#result-currency")[1].value = "gbp"
                document.querySelectorAll("#result-currency")[3].value = "pln"
                document.querySelectorAll("#result-currency")[4].value = "krw"
                document.querySelectorAll("#result-currency")[5].value = "usd"
                break
        }
        
        for(let i = 1;i<6;i++){
            let exchange = {
                "usd": 1, "eur": 0.92, "gbp": 0.77, 
                "pln": 3.87, "krw": 1467.40, "cny": 7.23
            };
            result = value * exchange[document.querySelectorAll("#result-currency")[i].value];
            document.querySelectorAll("#result")[i].value = result;
        }   
    }
    
}

function clearClick(){
    document.getElementById("enter").value = 0
    for(let i = 0;i<6;i++){
        document.querySelectorAll("#result")[i].value = 0
    }
    
    enter = 0
    result = 0
}

function currencyClick(){
    const div1 = document.querySelector(".one-currency");
    const div2 = document.querySelector(".all-currency");

    isCurrencyAll = !isCurrencyAll;
    
    div1.style.display = isCurrencyAll ? "none" : "flex";
    div2.style.display = isCurrencyAll ? "flex" : "none";
    document.getElementById("edit-currency").textContent = isCurrencyAll ? "One currency" : "All currency";
}
