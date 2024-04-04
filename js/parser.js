// Function to parse a web page and extract the title using a CORS proxy
function getPageTitleWithProxy(url) {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = proxyUrl + url;
    
    // Make a request to the URL using the CORS proxy
    fetch(targetUrl)
        .then(response => {
            // Check if the request was successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the response as text
            return response.text();
        })
        .then(html => {
            // Parse the HTML using DOM methods
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            // Find the table element
            const table = doc.querySelector('table');

            // Check if a table was found
            if (!table) {
                throw new Error('Table not found on the page');
            }

            // Extract data from the table
            const rows = table.querySelectorAll('tr');
            rows.forEach(row => {
                const cells = row.querySelectorAll('td');
                const rowData = Array.from(cells).map(cell => cell.textContent.trim());
                console.log(rowData); // Print row data, separated by '|'
            });
        })
        .catch(error => {
            // Handle errors
            console.error('Error parsing page:', error);
        });
}

// Example usage with the CORS proxy:
const url = 'https://coinmarketcap.com/ru/all/views/all/';
getPageTitleWithProxy(url);
