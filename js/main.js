// Light switcher
const lightSwitches = document.querySelectorAll('.light-switch');
if (lightSwitches.length > 0) {
  lightSwitches.forEach((lightSwitch, i) => {
    if (localStorage.getItem('dark-mode') === 'true') {
      // eslint-disable-next-line no-param-reassign
      lightSwitch.checked = true;
    }
    lightSwitch.addEventListener('change', () => {
      const { checked } = lightSwitch;
      lightSwitches.forEach((el, n) => {
        if (n !== i) {
          // eslint-disable-next-line no-param-reassign
          el.checked = checked;
        }
      });
      if (lightSwitch.checked) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('dark-mode', true);
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('dark-mode', false);
      }
    });
  });
}

// JavaScript code to handle the search functionality

// Get references to the input field and search results container
const searchInput = document.getElementById('search');
const searchForm = document.getElementById('search-form');
const searchResults = document.getElementById('search-results');

// Function to perform the search and update the results
function performSearch() {
    const query = searchForm.value.trim().toLowerCase();
    // You can implement your search logic here
    
    // For this example, we'll just display the query
    searchResults.textContent = `Search Query: ${query}`;
}

// Add an event listener to the search input
searchInput.addEventListener('input', performSearch);
