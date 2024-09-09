function searchCourses() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const courses = document.querySelectorAll('.course');

    courses.forEach(course => {
        const courseTitle = course.querySelector('h2').textContent.toLowerCase();
        const courseDescription = course.querySelector('p').textContent.toLowerCase();

        if (courseTitle.includes(searchInput) || courseDescription.includes(searchInput)) {
            course.style.display = '';
        } else {
            course.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const ratingValue = document.getElementById('rating-value');
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', () => {
            selectedRating = star.getAttribute('data-value');
            updateStars(selectedRating);
            ratingValue.textContent = `Você avaliou com ${selectedRating} estrelas.`;
        });

        star.addEventListener('mouseover', () => {
            updateStars(star.getAttribute('data-value'));
        });

        star.addEventListener('mouseout', () => {
            updateStars(selectedRating);
        });
    });

    function updateStars(rating) {
        stars.forEach(star => {
            star.classList.remove('selected');
            if (star.getAttribute('data-value') <= rating) {
                star.classList.add('selected');
            }
        });
    }
});