//import React from 'react'

// DEBT
async function loadDebtAPI() {
    var debt = await fetch("https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny?filter=record_fiscal_year:eq:2024")
    debtData = await debt.json();
    console.log(debtData);
}

// SPENDING
async function loadFinancialReport() {
    let year = document.getElementById("year").value;
    var fin = await fetch(`https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/statement_net_cost?filter=record_fiscal_year:eq:2023`) //need endpoint
    // does not contain year 2024
    finData = await fin.json();

    let select = document.createElement('select');

    finData.data.forEach((res) => {

        let agency = res.agency_nm;
        console.log(agency)
        let agencyDropdown = document.getElementById("agency");

        let agencyOption = document.createElement("option");
        
        let ignore = ['Subtotal', 'Total', 'Unmatched transactions and balances (Note 1.T)'];
        if (ignore.indexOf(agency) === -1 && (agencyDropdown === null || optionDoesNotExist(agencyDropdown, agency))) {
            agencyOption.value = agencyOption.text = agency;
            console.log(agencyOption)
            agencyDropdown.appendChild(agencyOption);
        }

        
    })
    console.log(finData);
}

// REVENUE
async function loadTreasuryAPI() {
    var tre = await fetch("https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/mts/mts_table_1") //need endpoint
    treData = await tre.json(); 
    console.log(treData); 
}

async function displayDebt() {

}

function optionDoesNotExist(selectElement, optionValue) {
    for (var i = 0; i < selectElement.options.length; i++) {
      if (selectElement.options[i].value == optionValue) {
        return false; // Option exists
      }
    }
    return true; // Option does not exist
  }