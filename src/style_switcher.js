// /*theme light and dark mode */
// const dayLight = document.querySelector(".day-night");

// dayLight.addEventListener("click", () => {
//     dayLight.querySelector("i").classList.toggle("fa-sun");
//     dayLight.querySelector("i").classList.toggle("fa-moon");
//     document.body.classList.toggle("dark");
// })
// window.addEventListener("load", () => {
//     if (document.body.classList.contains("dark")) {
//         dayLight.querySelector("i").classList.add("fa-sun");
//     } else {
//         dayLight.querySelector("i").classList.add("fa-moon");
//     }
// })

// window.addEventListener("load", () => {
//     document.querySelector(".preloader").classList.add("fade-out");
//     setTimeout(() => {
//         document.querySelector(".preloader").style.display = "none";
//     }, 600);
// })

/* src/style_switcher.js */

const dayLight = document.querySelector(".day-night");
const body = document.body;
const storageKey = 'theme-preference';

function applyTheme(isDark) {
    if (isDark) {
        body.classList.add('dark-mode');
        dayLight.querySelector("i").classList.remove("fa-moon");
        dayLight.querySelector("i").classList.add("fa-sun");
        localStorage.setItem(storageKey, 'dark');
    } else {
        body.classList.remove('dark-mode');
        dayLight.querySelector("i").classList.remove("fa-sun");
        dayLight.querySelector("i").classList.add("fa-moon");
        localStorage.setItem(storageKey, 'light');
    }
}

window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem(storageKey);

    const systemPrefersDark = window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;

    let initialThemeIsDark = false;

    if (savedTheme === 'dark') {
        initialThemeIsDark = true;
    } else if (savedTheme === 'light') {
        initialThemeIsDark = false;
    } else {
        initialThemeIsDark = systemPrefersDark;
    }

    applyTheme(initialThemeIsDark);
});

dayLight.addEventListener("click", () => {
    const isDark = body.classList.contains('dark-mode');
    applyTheme(!isDark);
});

window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader");
    if (preloader) {
        preloader.classList.add("fade-out");
        setTimeout(() => {
            preloader.style.display = "none";
        }, 600);
    }
});