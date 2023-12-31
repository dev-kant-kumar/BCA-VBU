// Function to handle the selection change and redirect to the selected page
function redirectToPage(selectId) {
    // Get the selected option value
    var selectedValue = document.getElementById(selectId).value;

    // Redirect to the selected page
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}

// Attach the event listeners to the select elements
document.addEventListener('DOMContentLoaded', function() {
    var papersDropdown = document.getElementById('papersDropdown');
    var examsDropdown = document.getElementById('examsDropdown');
    var resourcesDropdown = document.getElementById('resourcesDropdown');
    var resultDropdown = document.getElementById('resultDropdown');
    var accountDropdown = document.getElementById('accountDropdown');

    papersDropdown.addEventListener('change', function() {
        redirectToPage('papersDropdown');
    });

    examsDropdown.addEventListener('change', function() {
        redirectToPage('examsDropdown');
    });

    resourcesDropdown.addEventListener('change', function() {
        redirectToPage('resourcesDropdown');
    });

    resultDropdown.addEventListener('change', function() {
        redirectToPage('resultDropdown');
    });

    accountDropdown.addEventListener('change', function() {
        redirectToPage('accountDropdown');
    });
});
