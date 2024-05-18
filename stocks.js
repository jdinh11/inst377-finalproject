var viewDiv = document.getElementById('viewing-stock');
var addDiv = document.getElementById('adding-stock');

viewDiv.style.display = "none";
addDiv.style.display = "none";

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
    var host = window.location.origin;
    console.log(host)
    await fetch(`${host}/companies`)
        .then((res) => res.json())
        .then((res) => {
            console.log(res)

            var table = document.createElement('table')
            table.setAttribute('id', 'companyInfo')

            var tableRow = document.createElement('tr')
            var tableHead1 = document.createElement('th')
            tableHead1.innerHTML = "Symbol"
            tableRow.appendChild(tableHead1)

            var tableHead2 = document.createElement('th')
            tableHead2.innerHTML = "Company Name"
            tableRow.appendChild(tableHead2)

            var tableHead3 = document.createElement('th')
            tableHead3.innerHTML = "Current Price"
            tableRow.appendChild(tableHead3)

            var tableHead4 = document.createElement('th')
            tableHead4.innerHTML = "Market Cap"
            tableRow.appendChild(tableHead4)

            var tableHead5 = document.createElement('th')
            tableHead5.innerHTML = "Revenue Growth/Loss"
            tableRow.appendChild(tableHead5)

            var tableHead6 = document.createElement('th')
            tableHead6.innerHTML = "City"
            tableRow.appendChild(tableHead6)

            var tableHead7 = document.createElement('th')
            tableHead7.innerHTML = "State"
            tableRow.appendChild(tableHead7)

            res.forEach(company => {
                var companyRow = document.createElement('tr')
                var symbol = document.createElement('td')
                var companyName = document.createElement('td')
                var currentPrice = document.createElement('td')
                var marketCap = document.createElement('td')
                var revenue = document.createElement('td')
                var city = document.createElement('td')
                var state = document.createElement('td')

                symbol.innerHTML = company.Symbol
                companyName.innerHTML = company.Longname
                currentPrice.innerHTML = company.Currentprice
                marketCap,innerHTML = company.Marketcap
                revenue.innerHTML = company.Revenuegrowth
                city.innerHTML = company.city
                state.innerHTML = company.state

                table.appendChild(companyRow)

            })

        })
}

function searchStock() {
    document.getElementById('company-form').addEventListener('submit', async function(event) {
        event.preventDefault();
        const companySymbol = document.getElementById('ticker-symbol').value;
        console.log(companySymbol)
        await fetch(`/company/${companySymbol}`)
            .then(response => response.json())
            .then(data => {
                console.log('Company Data:', data);
                // Add code here to handle/display the data as needed
            })
            .catch(error => {
                console.error('Error fetching company data:', error);
            });
    });
};