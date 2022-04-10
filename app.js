// Sections and section buttons
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
// Select body class main-content
const allSections = document.querySelector('.main-content');

function PageTransitions() {
    // Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() { // Note: We cannot use arrow function as the 'this' keyword doesn't exist in it, it only exists in regular function
            let currentBtn = document.querySelectorAll('.active-btn');
            // When button is not clicked anymore, replace active-btn class with empty string (inactive)
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn'
        })
    }

    // Sections Active
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id; // Referring to the id of the selected section of the button clicked
        if (id) {
            // Remove selected from the other buttons that are active
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            // Hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            // Add active class into class list
            const element = document.getElementById(id);
            element.classList.add('active')
        }
    })

}

PageTransitions();