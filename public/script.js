document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.getElementById('reviewForm');
    const reviewsList = document.getElementById('reviewsList');

    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get values from the form
        const companyName = document.getElementById('companyName').value;
        const pros = document.getElementById('pros').value;
        const cons = document.getElementById('cons').value;
        const rating = document.getElementById('rating').value;

        // Create a new review element
        const review = document.createElement('div');
        review.classList.add('review');
        review.innerHTML = `
            <h3>${companyName}</h3>
            <p><strong>Pros:</strong> ${pros}</p>
            <p><strong>Cons:</strong> ${cons}</p>
            <p><strong>Rating:</strong> ${rating}</p>
        `;

        // Append the review to the list
        reviewsList.appendChild(review);

        // Clear the form fields
        reviewForm.reset();
    });

    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', function() {
        const searchText = searchInput.value.toLowerCase();
        const reviews = reviewsList.getElementsByClassName('review');

        for (const review of reviews) {
            const companyName = review.querySelector('h3').textContent.toLowerCase();
            if (companyName.includes(searchText)) {
                review.style.display = 'block';
            } else {
                review.style.display = 'none';
            }
        }
    });
});
