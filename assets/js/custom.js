window.addEventListener('DOMContentLoaded', () => {
    let nav = document.getElementsByClassName('post-nav');
    if (nav && nav.length > 0)
        return;
    
    let container = document.getElementById('gitalk-container');
    if (container)
        container.classList.add('gitalk-without-nav');
}, {once: true});
