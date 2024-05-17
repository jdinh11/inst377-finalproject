const supabaseClient = require('@supabase/supabase-js')
const bodyParser = require('body-parser')
const express = require('express')

const app = express()
const port = 3000
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))

const supabaseUrl = 'https://pfyqxbxbecugrzlrypfo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmeXF4YnhiZWN1Z3J6bHJ5cGZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3MDYzNDEsImV4cCI6MjAzMTI4MjM0MX0.4DFYq2l94IL3INC-13BrGrkvDszpHrXokAWjiZdJQhM'
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey)

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
})

app.listen(port, () => {
    console.log('App is running!')
})