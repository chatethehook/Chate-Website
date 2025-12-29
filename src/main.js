import { initMembersCarousel } from './members_carousel_script.js';
import { initAchievementsCarousel } from './achievements_carousel_script.js';

document.addEventListener('DOMContentLoaded', () => {
  initMembersCarousel();
  initAchievementsCarousel();

  try {
    if (typeof bootstrap !== 'undefined') {
      const mem = document.getElementById('members_carousel');
      if (mem) new bootstrap.Carousel(mem, { interval: 3000 });
      const ach = document.getElementById('achievements_carousel');
      if (ach) new bootstrap.Carousel(ach, { interval: 3000 });
    } else if (window.jQuery) {
      if (window.$) {
        $('#members_carousel').carousel({ interval: 3000 });
        $('#achievements_carousel').carousel({ interval: 3000 });
      }
    }
  } catch (e) {
    console.warn('carousel init failed', e);
  }
});
