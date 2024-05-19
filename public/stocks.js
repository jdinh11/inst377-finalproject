var viewDiv = document.getElementById('viewing-stock');
var addDiv = document.getElementById('adding-stock');

viewDiv.style.display = "none";
addDiv.style.display = "none";

const host = window.location.origin;

function toggleView() {
    var viewDiv = document.getElementById('viewing-stock');
    var addDiv = document.getElementById('adding-stock')
    
    if (addDiv.style.display != "none") {
        addDiv.style.display = "none"
    }

    if (viewDiv.style.display === "none") {
        viewDiv.style.display = "block";
    } else {
        viewDiv.style.display = "none";
    }
}

function toggleAdd() {
    var viewDiv = document.getElementById('viewing-stock');
    var addDiv = document.getElementById('adding-stock')
    
    if (viewDiv.style.display != "none") {
        viewDiv.style.display = "none"
    }

    if (addDiv.style.display === "none") {
        addDiv.style.display = "block";
    } else {
        addDiv.style.display = "none";
    }
}

async function populateStockTable() {
    await fetch(`${host}/companies`)
        .then((res) => res.json())
        .then((res) => {
            console.log(res)

            var table = document.getElementById('stock-table')
            var oldBody = table.querySelector('tbody')
            if (oldBody) {
                table.removeChild(oldBody);
            }
            
            var body = document.createElement('tbody')
            body.setAttribute('id', 'stock-body')
            
            res.forEach(company => {
                var companyRow = document.createElement('tr')
                var id = document.createElement('td')
                var symbol = document.createElement('td')
                var companyName = document.createElement('td')
                var currentPrice = document.createElement('td')
                var marketCap = document.createElement('td')
                var revenue = document.createElement('td')
                var city = document.createElement('td')
                var state = document.createElement('td')

                id.innerHTML = company.id
                symbol.innerHTML = company.Symbol
                companyName.innerHTML = company.Longname
                currentPrice.innerHTML = company.Currentprice
                marketCap.innerHTML = company.Marketcap
                revenue.innerHTML = company.Revenuegrowth
                city.innerHTML = company.City
                state.innerHTML = company.State

                companyRow.appendChild(id)
                companyRow.appendChild(symbol)
                companyRow.appendChild(companyName)
                companyRow.appendChild(currentPrice)
                companyRow.appendChild(marketCap)
                companyRow.appendChild(revenue)
                companyRow.appendChild(city)
                companyRow.appendChild(state)

                
                body.appendChild(companyRow)

            })

            table.appendChild(body)
        })
}

async function selectStock(companySymbol) {
    console.log(companySymbol)
    await fetch(`${host}/company/${companySymbol.toUpperCase()}`)
        .then((data) => data.json())
        .then((data) => {
            console.log('Company Data:', data);
            
            var table = document.getElementById('stock-table')

            var oldBody = table.querySelector('tbody')
            if (oldBody) {
                table.removeChild(oldBody);
            }

            var body = document.createElement('tbody')

            var companyRow = document.createElement('tr')
            var id = document.createElement('td')
            var symbol = document.createElement('td')
            var companyName = document.createElement('td')
            var currentPrice = document.createElement('td')
            var marketCap = document.createElement('td')
            var revenue = document.createElement('td')
            var city = document.createElement('td')
            var state = document.createElement('td')

            id.innerHTML = data[0].id
            symbol.innerHTML = data[0].Symbol
            companyName.innerHTML = data[0].Longname
            currentPrice.innerHTML = data[0].Currentprice
            marketCap.innerHTML = data[0].Marketcap
            revenue.innerHTML = data[0].Revenuegrowth
            city.innerHTML = data[0].City
            state.innerHTML = data[0].State

            console.log(id, symbol, companyName, currentPrice, marketCap, revenue, city, state)
            companyRow.appendChild(id)
            companyRow.appendChild(symbol)
            companyRow.appendChild(companyName)
            companyRow.appendChild(currentPrice)
            companyRow.appendChild(marketCap)
            companyRow.appendChild(revenue)
            companyRow.appendChild(city)
            companyRow.appendChild(state)

            
            body.appendChild(companyRow)

            console.log(body)
            table.appendChild(body)
        })
}

function searchStock() {
    var search = document.getElementById("ticker-symbol").value;

    if (search.length > 0) {
        console.log("Searching stock")
        selectStock(search)
    } else {
        populateStockTable()
    }
}


async function addStock() {
    console.log("Creating Stock")
    try {
        const response = await fetch(`${host}/newcompany`, {
            method: 'POST',
            body: JSON.stringify({
                "symbol": document.getElementById('symbol').value,
                "companyName": document.getElementById('name').value,
                "currentPrice": document.getElementById('current-price').value,
                "marketCap": document.getElementById('market-cap').value,
                "revenueGrowth": document.getElementById('revenue-growth').value,
                "city": document.getElementById('city').value,
                "state": document.getElementById('state').value
            }),
            headers: {
                "Content-type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            alert("Entry added successfully!");
            document.getElementById('new-stock-form').reset();
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to add entry. Please try again.');
    }
}