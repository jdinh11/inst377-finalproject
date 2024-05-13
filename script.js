//import React from 'react'

// DEBT
async function loadDebtAPI() {
    var debt = await fetch("https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny?filter=record_fiscal_year:eq:2024")
    debtData = await debt.json();
    console.log(debtData);
}

// SPENDING
async function loadFinancialReport() {
    // let year = document.getElementById("").values
    var fin = await fetch(`https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/statement_net_cost?filter=record_fiscal_year:eq:2023`) //need endpoint
    // does not contain year 2024
    finData = await fin.json();
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

window.onload = loadDebtAPI(), loadFinancialReport(), loadTreasuryAPI()