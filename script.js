//import React from 'react'


function loadDebtAPI() {
    var debt = fetch("https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny")
    debtData = debt.json();
    console.log(debtData);
}

function loadFinancialReport() {
    var fin = fetch("https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/statement_net_cost") //need endpoint
    finData = fin.json();
    console.log(finData);
}


function loadTreasuryAPI() {
    var tre = fetch("https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/mts/mts_table_1") //need endpoint
    treData = tre.json(); 
    console.log(treData); 
}

async function displayDebt() {

}