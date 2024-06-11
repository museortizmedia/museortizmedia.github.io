// Configure dark mode strategy
tailwind.config = {
    darkMode: 'class', /* 'class' or 'media', we use 'class' to enable dark mode manually */
}
// Preload dark mode in local or windows match
if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark')
}
// Activa el dark mode
const ActiveDarkMood = ()=>{
    localStorage.theme = 'dark';
    document.documentElement.classList.add('dark');
}
// Desactiva el dark mode
const DisactiveDarkMood = ()=>{
    localStorage.theme = 'ligth';
    document.documentElement.classList.remove('dark');
}
if(localStorage.getItem('theme')==undefined){ActiveDarkMood();}