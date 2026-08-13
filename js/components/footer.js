// /**
//  * @file footer.js
//  * @description Renders the footer section of the website, including logo, social links,
//  * and grouped navigation columns (Events, Articles, Videos).
//  * @module components/footer
//  */

// import { renderSocialLinks } from "./navbar.js";

// const EVENT_LINKS = [
//   { label: "Above & Beyond", href: "/events.html#above-and-beyond" },
//   { label: "Stepping Stone", href: "/events.html#stepping-stone" },
//   { label: "ကျောင်းလျှောက်ကြမယ်", href: "/events.html#kyaung-shaut" },
// ];

// const ARTICLE_LINKS = [
//   { label: "Scholarships", href: "/articles.html#scholarships" },
//   {
//     label: "Testing and Curriculum",
//     href: "/articles.html#testing-and-curriculum",
//   },
//   { label: "UK", href: "/articles.html#uk" },
//   { label: "US", href: "/articles.html#us" },
//   { label: "All Articles", href: "/articles.html#all-articles" },
// ];

// const VIDEO_LINKS = [
//   { label: "စုတုပြု Series", href: "/videos.html#su-tu-pyu" },
//   { label: "Scholars' Diaries", href: "/videos.html#scholars-diaries" },
// ];

// function renderFooterLinks(links) {
//   return links
//     .map(
//       ({ label, href }) => `
//       <a class="footer-link" target="_self" href="${href}"><p class="m-0">${label}</p></a>`,
//     )
//     .join("");
// }

// export function renderFooter() {
//   return `
// <div class="footer container-fluid px-4 py-5">
//   <div class="row g-4">

//     <!-- Logo Column -->
//     <div class="col-12 col-sm-6 col-md-3">
//       <img class="logo d-block mx-auto" src="assets/logos/logo-transparent.webp" alt="Organization Logo">
//       <h3 class="text-center"><span class="textaccent fw-semibold">Chate</span> Your Dreams</h3>
//       <div class="text-center">
//         ${renderSocialLinks()}
//       </div>
//     </div>

//     <!-- Other Columns -->
//     <div class="col-6 col-md-2">
//       <h3 class="fw-medium">Events</h3>
//       ${renderFooterLinks(EVENT_LINKS)}
//     </div>

//     <div class="col-6 col-md-2">
//       <h3 class="fw-medium">Articles</h3>
//       ${renderFooterLinks(ARTICLE_LINKS)}
//     </div>

//     <div class="col-6 col-md-2">
//       <h3 class="fw-medium">Videos</h3>
//       ${renderFooterLinks(VIDEO_LINKS)}
//     </div>

//   </div>

//   <div class="copyright mt-4">
//     <p>
//       © 2026
//       <a href="https://github.com/chatethehook/Chate-Website" title="The Hook Official Website">ချိတ် - The Hook Official Website</a>
//       by
//       <a href="https://chatethehook.com/" title="The Hook">ချိတ် - The Hook</a>
//     </p>
//   </div>
// </div>
// `;
// }
