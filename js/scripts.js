document.getElementById('hamburger-menu').addEventListener('click', function () {
    const dropdownMenu = document.getElementById("hamburger-dropdown");

    if(dropdownMenu.classList.contains('hidden')){
        dropdownMenu.classList.remove('hidden');
    }
    else{
        dropdownMenu.classList.add('hidden');
    }
})