document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const searchMenuInput = document.getElementById("search-menu-input");
  const toggleButton = document.getElementById("collapse-arrow");

  toggleButton.addEventListener("click", function () {
    sidebar.classList.toggle("collapsed");
    searchMenuInput.classList.toggle("collapsed");
    document.body.classList.toggle("sidebar-collapsed"); // Add this line
    const svg = toggleButton.querySelector("svg");
    if (sidebar.classList.contains("collapsed")) {
      svg.style.transform = "rotate(180deg)";
    } else {
      svg.style.transform = "rotate(0deg)";
    }
  });
});

$(document).ready(function () {
  const $searchInput = $("#searchInput");
  const $searchDropdown = $("#searchDropdown");
  const $recentSearches = $("#recentSearches");
  const $searchResults = $("#searchResults");
  const $searchQuery = $("#searchQuery");

  // Show dropdown on focus (Collapsed State)
  $searchInput.on("focus", function () {
    if ($(this).val().trim() === "") {
      $recentSearches.show();
      $searchResults.hide();
      $searchDropdown.addClass("show");
    }
  });

  // Hide dropdown when clicking outside
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".search-container").length) {
      $searchDropdown.removeClass("show");
    }
  });

  // Search functionality
  $searchInput.on("input", function () {
    const query = $(this).val().toLowerCase().trim();
    if (query === "") {
      $recentSearches.show();
      $searchResults.hide();
      $searchDropdown.addClass("show");
    } else {
      $recentSearches.hide();
      $searchResults.show();
      $searchQuery.text(query);
      $searchDropdown.addClass("show");

      // Filter search results
      $(".search-result-item").each(function () {
        const text = $(this).text().toLowerCase();
        $(this).toggle(text.includes(query));
      });
    }
  });

  // Clear all recent searches
  $(".clear-all").on("click", function () {
    $recentSearches.find(".dropdown-item").remove();
    $recentSearches.hide();
  });
});
