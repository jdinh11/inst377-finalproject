const supabaseClient = require('@supabase/supabase-js')
const bodyParser = require('body-parser')
const express = require('express')
const { isValidStateAbbreviation } = require("usa-state-validator")

const app = express()
const port = 3000
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))

const supabaseUrl = 'https://pfyqxbxbecugrzlrypfo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmeXF4YnhiZWN1Z3J6bHJ5cGZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3MDYzNDEsImV4cCI6MjAzMTI4MjM0MX0.4DFYq2l94IL3INC-13BrGrkvDszpHrXokAWjiZdJQhM'
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey)

app.get('/', (req, res) => {
    res.sendFile('stock.html', { root: __dirname })
})

app.get('/companies', async (req, res) => {
    console.log('Attempting to GET all companies')

    const { data, error } = await supabase
        .from('companies-data')
        .select()

    console.log('Data: ', data)
    console.log('Error: ', error)
})

app.post('/newcompany', async (req, res) => {
    console.log('Adding Company')
    var symbol = req.body.symbol;
    var longName = req.body.companyName;
    var currentPrice = req.body.currentPrice;
    var marketCap = req.body.marketCap;
    var revenueGrowth = req.body.revenueGrowth;
    var city = req.body.city;
    var state = req.body.state;

    if(!isValidStateAbbreviation(state)) {
        console.log(`State ${state} is Invalid`)
        res.statusCode = 400
        res.header('Content-Type', 'application/json')
        var errorJson = {
            "message": `${state} is not a Valid State`
        }
        res.send(JSON.stringify(errorJson))
        return;
    }

    const { data, error } = await supabase
        .from('companies-data')
        .insert({ 'Symbol': symbol, 'Longname': longName, 'Currentprice': currentPrice, 'Marketcap': marketCap, 'Revenuegrowth': revenueGrowth, 'City': city, 'State': state })
        .select()

    if (error) {
        console.log('Error')
        res.send(error)
    } else {
        res.send(data)
    }
})

app.get(`/company/${company_symbol}`, async (req, res) => {
    console.log('Attempting to GET all companies')

    const { data, error } = await supabase
        .from('companies-data')
        .select()
        .eq('Symbol', company_symbol)

    console.log('Data: ', data)
    console.log('Error: ', error)
})

document.addEventListener

app.listen(port, () => {
    console.log('App is running!')
})