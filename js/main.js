/**
 * @main.js
 * @description Entry point for the Chate website. Initializes the layout and mounts all main components.
 * @module main
 */

import { mountLayout } from "./components/layout.js";
import { mountHero } from "./components/hero.js";
import { mountAchievements } from "./components/achievements.js";
import { mountHowItWorks } from "./components/how-it-works.js";
import { mountImpact } from "./components/impact.js";
import { mountMembers } from "./components/members.js";
import { mountFAQ } from "./components/faq.js";

function init() {
  mountLayout();
  mountHero();
  mountAchievements();
  mountHowItWorks();
  mountImpact();
  mountMembers();
  mountFAQ();
}

document.addEventListener("DOMContentLoaded", init);
