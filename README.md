# inst377-finalproject

Follow the Money

Our website, Follow the Money, enables users to search fiscal data on 
government spending. In addition, we provide stock market data on different 
companies. Lastly, users have the ability to search for a specific company's 
fiscal information, making our website a unique and versatile way to analyze 
financial data.

Our target users are those on Google Chrome. We chose this browser due to its
popularity and how familiar our team was with its functionalities. Our target 
demographic is investors, analysts, researchers, policymakers, or even students, 
as we offer an all-in-one platform to analyze financial data and make informed
decisions.

# Developer Manual:
## Overview
It is advised to download CORS to mitigate any potential errors. To access the website, simply enter the URL into a Chrome browser. The website functionality was specifically tested in a Chrome environment, 

The website pulls information from two APIs: US Treasury Fiscal Data API and a database we created in Supabase. Data from the Financial Report of the U.S. Government dataset (US Treasury Fiscal Data API) is used for the Spending page to populate the agency names in the drop-down menu and the line graph. For our API within Supabase, we imported data from an external dataset that contained stock information. This data populates the table on the stocks page (rendered by clicking the button). The user can select a specific stock using the text box and/or write to the database to add stock information. 

When graphing data on the Spending page, certain agencies may only display Gross Cost or Net Cost data. Additionally, the amount and timespan of data collected varies between agencies. As such, graph axes may vary and checkboxes may be non-functional depending on the available data for a specified agency. Because of the collection method for fiscal 
data, some of the years on the x-axis may repeat or appear out of order. 



## Installation

### Prerequisites
- Node.js and npm
- Git
- Cors

### Steps
1. Clone the repository:
    ```sh
    git clone https://github.com/jdinh11/inst377-finalproject.git
    cd inst377-finalproject
    ```

2. Install dependencies:
        a. **Install all project dependencies**:
    ```sh
    npm install
    ```

    b. **Install `nodemon` globally** (if not already installed):
    ```sh
    npm install -g nodemon
    ```

    c. **Install `@supabase/supabase-js`**:
    ```sh
    npm install @supabase/supabase-js
    ```

    d. **Install `body-parser`**:
    ```sh
    npm install body-parser
    ```

    e. **Install `express`**:
    ```sh
    npm install express
    ```

    f. **Install `usa-state-validator`**:
    ```sh
    npm install usa-state-validator
    ```
## API Endpoints

### Spending Data
#### GET /spending
- **Description**: Fetch spending data for a specific agency.
- **Parameters**: `agency`
- **Example Request**: /spending?agency=Department%20of%20Education

### Stock Data
#### GET /companies
- **Description**: Fetch a list of companies.
- **Parameters**: None
- **Example Request**: /companies

#### GET /company/:symbol
- **Description**: Fetch data for a specific company.
- **Parameters**: `symbol`
- **Example Request**: /company/AAPL

#### POST /newcompany
- **Description**: Add a new company to the database.
- **Body Ex.**:
```json
{
  "symbol": "AAPL",
  "companyName": "Apple Inc.",
  "currentPrice": 150.00,
  "marketCap": 2500000000,
  "revenueGrowth": 12.5,
  "city": "Cupertino",
  "state": "CA"
}
```
## Known Bugs and Future Development
### Known Bugs
1. **API Rate Limiting**: The application may encounter issues if the API rate limit is exceeded. This needs to be handled gracefully.
2. **Responsive Design Issues**: Some elements may not render properly on smaller screens.
3. **Inconsistent Spending Data**: Some departments within the spending page could have inconsistent data (i.e., missing some years within the data). This is due to the data within the Fiscal Data API not having consistent records and is unfortunately out of our control. 

### Future Development
- **Authentication and Authorization**: Implement user authentication and authorization for a more personalized user experience.
- **Advanced Filtering Options**: Enhance the filtering options for spending data to allow for more granular searches.
- **More Information and Data**: Incorporate data for more datasets from the US Fiscal Data website, such as government revenue and debt.
- **Descriptions**: Add bio and information on agencies and subcategories of spending.
- **Enhanced Error Handling**: Improve error handling to provide more user-friendly error messages.







