# inst377-finalproject

Fiscal Data Website 

Our website, Fiscal Data Website, enables users to search fiscal data on 
government spending. In addition, we provide stock market data on different 
companies. Lastly, users have the ability to search for a specific company's 
fiscal information, making our website a unique and versatile way to analyze 
financial data.

Our target users are those on Google Chrome. We chose this browser due to its
popularity and how familiar our team was with its functionalities. Our target 
demographic is investors, analysts, researchers, policymakers or even students, 
as we offer an all-in-one platform to analyze financial data and make informed
decisions.

## Link to Developer Manual:

The website itself does not require any installation, however, it is advised to download CORS to mitigate any potential errors. To access the website, simply enter the URL into a chrome browser. The website functionality was specifically tested in a Chrome environment, 

The website pulls information from two APIs : US Treasury Fiscal Data API and a database we created in Supabase. Data from the Financial Report of the U.S. Government dataset (US Treasury Fiscal Data API) is used for the Spending page to populate the agency names in the drop down menu and the line graph. For our API within Supabase, we imported data from an external dataset that contained stock information. This data populates the table on the stocks page (rendered by clicking the button). The user can select a specific stock using the text box and/or write to the database to add stock information. 

When graphing data on the Spending page, certain agencies may only display Gross Cost or Net Cost data. Additionally, the amount and timespan of data collected varies between agencies. As such, graph axes may vary and checkboxes may be non-functional depending on the available data for a specified agency. 
