const searchInput = document.getElementById('search-input');
const tableBody = document.getElementById('table-body');

searchInput.addEventListener('input', function() {

    const searchText = this.value.trim().toLowerCase();
    Array.from(tableBody.getElementsByTagName('tr')).forEach(row => {
        const rowData = row.cells[2].textContent.trim().toLowerCase();
        
        if (rowData.includes(searchText)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});


// For Mobiles
const searchInputM = document.getElementById('search-input');
const tableBodyM = document.getElementById('table-body-mobile');

searchInputM.addEventListener('input', function() {

    const searchText = this.value.trim().toLowerCase();
    Array.from(tableBodyM.getElementsByTagName('tr')).forEach(row => {
        const rowData = row.cells[2].textContent.trim().toLowerCase();
        
        if (rowData.includes(searchText)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});
