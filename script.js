//import React from 'react'



// LOAD SPENDING
async function loadSpendingAPI(department) {

    var fin = await fetch(`https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/statement_net_cost?filter=agency_nm:eq:${department}`) // does not contain year 2024
    
    finData = await fin.json();

    return finData;

}


// LOAD AGENCY
async function loadAgency() {
    var agency = await fetch("https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/statement_net_cost?fields=agency_nm")
    agencyData = await agency.json();
    console.log(agencyData);

    return agencyData;
}

async function populateSpending() {
    const selectOptions = document.getElementById("agency");
    
    agencyData = await loadAgency();
    
    agencyData.data.forEach((res) => {
        let agency = res.agency_nm;
        console.log(agency)

        const agencyOption = document.createElement("option")

        let ignore = ['Subtotal', 'Total', 'Unmatched transactions and balances (Note 1.T)', 'Interest'];
        if (!ignore.some(ignoreItem => agency.startsWith(ignoreItem)) && (selectOptions === null || optionDoesNotExist(selectOptions, agency))) {
            agencyOption.value = agencyOption.text = agency;
            selectOptions.appendChild(agencyOption);
        }
    })
}

function optionDoesNotExist(selectElement, optionValue) {
    for (var i = 0; i < selectElement.options.length; i++) {
      if (selectElement.options[i].value == optionValue) {
        return false; // Option exists
      }
    }
    return true; // Option does not exist
  }

  // THIS IS WHERE CHART JS STARTS // 

  document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myChart').getContext('2d'); 
  
    function updateChart(chart, labels, data) {
      chart.data.labels = labels;
      chart.data.datasets.forEach((dataset) => {
        dataset.data = data;
      });
      chart.update();
    }
    
    function check() {
      document.getElementById("myCheck").checked = true;
  }
  
  function uncheck() {
      document.getElementById("myCheck").checked = false;
  }
    
      document.getElementById('submit').addEventListener('click', lookUp); 
    });
    
    
          
    
      