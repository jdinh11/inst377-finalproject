//import React from 'react'


async function loadDebtAPI() {
    var debt = await fetch("https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny")
    debtData = await debt.json();
    console.log(debtData);
}

async function loadFinancialReport() {
    var fin = await fetch("https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/statement_net_cost") //need endpoint
    finData = await fin.json();
    console.log(finData);
}


async function loadTreasuryAPI() {
    var tre = await fetch("https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/mts/mts_table_1") //need endpoint
    treData = await tre.json(); 
    console.log(treData); 
}

async function displayDebt() {

}

window.onload = loadDebtAPI(), loadFinancialReport(), loadTreasuryAPI()