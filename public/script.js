document.addEventListener("DOMContentLoaded", function () {
    const reviewForm = document.getElementById("company-review-form");
    const reviewList = document.getElementById("review-list");

    // Handle form submission
    reviewForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(reviewForm);
        const reviewData = {};
        formData.forEach((value, key) => {
            reviewData[key] = value;
        });

        // Add the review to the list
        addReviewToDOM(reviewData);

        // Clear the form
        reviewForm.reset();
    });

    // Function to add a review to the DOM
    function addReviewToDOM(review) {
        const reviewItem = document.createElement("li");
        reviewItem.classList.add("review-item");
        reviewItem.innerHTML = `
            <p><strong>Company Name:</strong> ${review.companyName}</p>
            <p><strong>Industry:</strong> ${review.industry}</p>
            <p><strong>Location:</strong> ${review.location}</p>
            <p><strong>Rating:</strong> ${review.rating}</p>
            <p><strong>Review:</strong> ${review.review}</p>
        `;

        reviewList.appendChild(reviewItem);
    }
});
