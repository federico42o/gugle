const logo = document.getElementById('logo');
const search = document.getElementById('search');
const body = document.querySelector('body');
const darkBtn = document.getElementById('toggle-darkmode');
const iconDarkMode = document.getElementById('icon-darkmode');
const iconApps = document.getElementById('icon-apps');
const searchIcon = document.getElementById('search-icon');
const micIcon = document.getElementById('mic-icon');
const camIcon = document.getElementById('cam-icon');
const barra = document.getElementById('barra-buscador');
const searchBtn = document.getElementById('search-btn');
const linkTo = document.getElementById('link-to');
const searchForm = document.getElementById('search-form');
console.log(body.classList)

const toggleDarkMode = () => {
if(body.classList.contains('dark')){
    logo.src = 'assets/img/googlelogo_light272x92.png';
    toggleIconDarkMode(iconDarkMode,iconApps,searchIcon,micIcon,camIcon);


    iconDarkMode.src = 'assets/img/light_mode.svg';

}else if (body.classList.contains('light')){
    logo.src = 'assets/img/googlelogo_color_272x92.png';
    toggleIconDarkMode(iconDarkMode,iconApps,searchIcon,micIcon,camIcon);
    
    iconDarkMode.src = 'assets/img/dark_mode.svg';

}

}

const toggleIconDarkMode = (...icon)=>{
    icon.forEach((i)=>{
    if(body.classList.contains('dark')){
        i.classList.remove('icon-lightmode');
        i.classList.add('icon-darkmode');
    }else if (body.classList.contains('light')){
        i.classList.remove('icon-darkmode');
        i.classList.add('icon-lightmode');
    }
})
}
darkBtn.addEventListener('click', () => {
    if(body.classList.contains('dark')){
        body.classList.remove('dark');
        body.classList.add('light');
        toggleDarkMode()
    }else if (body.classList.contains('light')){
        body.classList.remove('light');
        body.classList.add('dark');
        toggleDarkMode()
    }
})


searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const base_url = "https://www.google.com.ar/search?q="
    if(search.value != ''){
        const query = search.value;
        const url = base_url.concat(query.replace(' ','+'));
        console.log(url)
        window.location.href = url
    }
    else {
        console.log('Please enter a search query'); 
    }

})