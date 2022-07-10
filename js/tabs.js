document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.catalog__tabs'), 
      tabs = document.querySelectorAll('.catalog__tab'),
      tabsContent = document.querySelectorAll('.catalog__content');

    function hideTabContent() {
    tabsContent.forEach(item => {
        item.style.display = 'none';
    });

    tabs.forEach(item => {
        item.classList.remove('catalog__tab_active');
    });
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'flex';
        tabs[i].classList.add('catalog__tab_active');
    }

    hideTabContent();
    showTabContent();

    wrapper.addEventListener('click', (event) => {

        if(event.target && event.target.classList.contains('catalog__tab')) {
            tabs.forEach((item, i) => {
                if(event.target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });     
        }
    });
})
