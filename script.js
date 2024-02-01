//your code here

document.addEventListener('DOMContentLoaded', function () {
  let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

  // Function to remove articles and get lexicographically sorted array
  function getSortedNamesWithNoArticles(names) {
    return names.map(name => {
      // Remove leading articles and trim
      const cleanedName = name.replace(/^(a|an|the)\s+/i, '').trim();
      return { original: name, cleaned: cleanedName };
    }).sort((a, b) => a.cleaned.localeCompare(b.cleaned))
      .map(entry => entry.original);
  }

  const sortedTouristSpots = getSortedNamesWithNoArticles(touristSpots);

  // Create ul element
  const ulElement = document.createElement('ul');
  ulElement.id = 'band';

  // Create and append li elements
  sortedTouristSpots.forEach(name => {
    const liElement = document.createElement('li');
    liElement.textContent = name;
    ulElement.appendChild(liElement);
  });

  // Append the ul element to the body
  document.body.appendChild(ulElement);
});
