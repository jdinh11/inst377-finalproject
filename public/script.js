// Function to fetch data from the API endpoint
async function fetchData(department) {
  try {
      const response = await fetch(`https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/statement_net_cost?filter=agency_nm:eq:${department}`);
      const data = await response.json();
      return data.data;
  } catch (error) {
      throw new Error('Error fetching data:', error);
  }
}

// Function to create or update the chart
function updateChart(chart, labels, grossCosts, netCosts, showGrossCost, showNetCost) {
  const datasets = [];
  
  if (showGrossCost) {
      datasets.push({
          label: 'Gross Cost',
          data: grossCosts,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
      });
  }
  
  if (showNetCost) {
      datasets.push({
          label: 'Net Cost',
          data: netCosts,
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1
      });
  }

  chart.data.labels = labels;
  chart.data.datasets = datasets;
  chart.update();
}

// Function to initialize the chart
function initializeChart() {
  const ctx = document.getElementById('myChart').getContext('2d');
  return new Chart(ctx, {
      type: 'line',
      data: {
          labels: [],
          datasets: []
      },
      options: {
          scales: {
              x: {
                  title: {
                      display: true,
                      text: 'Years'
                  },
                  ticks: {
                      min: 2001,
                      max: 2023
                  }
              },
              y: {
                  beginAtZero: true,
                  title: {
                      display: true,
                      text: 'Dollars (in Billions)'
                  }
              }
          }
      }
  });
}

// Function to handle form submission
async function handleSubmit(event) {
  event.preventDefault(); // Prevent form submission

  const department = document.getElementById('agency').value;
  const data = await fetchData(department);

  const labels = data.map(item => item.stmt_fiscal_year);
  const grossCosts = data.map(item => item.gross_cost_bil_amt);
  const netCosts = data.map(item => item.net_cost_bil_amt);

  const showGrossCost = document.getElementById('gross-cost').checked;
  const showNetCost = document.getElementById('net-cost').checked;

  updateChart(myChart, labels, grossCosts, netCosts, showGrossCost, showNetCost);
}

// Function to update the chart when checkboxes are clicked
function handleCheckboxClick() {
  const department = document.getElementById('agency').value;
  if (!department) return;

  fetchData(department).then(data => {
      const labels = data.map(item => item.stmt_fiscal_year);
      const grossCosts = data.map(item => item.gross_cost_bil_amt);
      const netCosts = data.map(item => item.net_cost_bil_amt);

      const showGrossCost = document.getElementById('gross-cost').checked;
      const showNetCost = document.getElementById('net-cost').checked;

      updateChart(myChart, labels, grossCosts, netCosts, showGrossCost, showNetCost);
  }).catch(error => console.error('Error fetching data:', error));
}

// Initialize the chart
const myChart = initializeChart();

// Add event listener to the submit button
document.getElementById('submit').addEventListener('click', handleSubmit);

// Add event listeners to the checkboxes
document.getElementById('gross-cost').addEventListener('click', handleCheckboxClick);
document.getElementById('net-cost').addEventListener('click', handleCheckboxClick);

// Function to load and populate the agency dropdown
async function populateSpending() {
  const selectOptions = document.getElementById("agency");

  const agencyData = await fetchData('');
  const uniqueAgencies = Array.from(new Set(agencyData.map(item => item.agency_nm)));

  uniqueAgencies.forEach(agency => {
      const agencyOption = document.createElement("option");
      agencyOption.value = agencyOption.text = agency;
      selectOptions.appendChild(agencyOption);
  });
}

// Call the populateSpending function on page load
document.addEventListener('DOMContentLoaded', populateSpending);
