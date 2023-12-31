// Function to handle the selection change and redirect to the selected page
function redirectToPage(selectId) {
    // Get the selected option value
    var selectedOption = document.getElementById(selectId);
    var selectedValue = selectedOption.options[selectedOption.selectedIndex].value;

    // If the selected value is a URL, redirect to the selected page
    if (selectedValue && selectedValue.startsWith("http")) {
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
