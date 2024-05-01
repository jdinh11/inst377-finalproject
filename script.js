import React from 'react'


function loadDebtAPI() {
    return fetch("https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny")
}

function loadFinancialReport() {
    return fetch("https://api.fiscaldata.treasury.gov/services/api/fiscal_service/") //need endpoint
}

function loadTreasuryAPI() {
    return fetch("https://api.fiscaldata.treasury.gov/services/api/fiscal_service/") //need endpoint
}

async function displayDebt() {

}