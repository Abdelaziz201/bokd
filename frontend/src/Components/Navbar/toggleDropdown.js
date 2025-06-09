function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Hide dropdown when mouse leaves the dropdown area
document.addEventListener('DOMContentLoaded', function() {
  var dropdown = document.querySelector('.dropdown');
  if (dropdown) {
    dropdown.addEventListener('mouseleave', function() {
      var dropdownContent = document.getElementById('myDropdown');
      if (dropdownContent || dropdownContent.classList.contains('show')) {
        dropdownContent.classList.remove('show');
      }
    });
  }
});
  