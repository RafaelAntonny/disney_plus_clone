document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    heroHeight = heroSection.clientHeight - 70;

    window.addEventListener('scroll', function() {
        const currentPosition = window.scrollY;

        if (currentPosition <= heroHeight) {
            hideHeaderElements();
        } else {
            showHeaderElements();   
        }
    })

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button) {
            const tabTarget = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`)
            hideAllTabs();
            tab.classList.add('shows__list--is-active');
            removeActiveButton();
            button.target.classList.add('shows__tabs__button--is-active');
        })
    }

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', toggleAnswer);
    }
})

function removeActiveButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function hideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

function toggleAnswer(element) {
    const htmlClass = 'faq__questions__item--is-open';
    const parentElement = element.target.parentNode;

    parentElement.classList.toggle(htmlClass);
}

function hideHeaderElements() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');

    setTimeout(function() {
        if (header.classList.contains('header--is-hidden')) {
            header.classList.add('header--visibility-is-hidden');
        }
    }, 500);
}

function showHeaderElements() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden', 'header--visibility-is-hidden');
}
