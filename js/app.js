//display menu
let list = document.querySelectorAll('.navigation li');

function activeLink() {
    list.forEach((item) =>
    item.classList.remove('hovered'));
    this.classList.add('hovered');
}
    list.forEach((item) => 
    item.addEventListener('mouseover', activeLink ));

//display menu toggle
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('main');

toggle.addEventListener('click', () => {
    navigation.classList.toggle('show');
    main.classList.toggle('show');
});