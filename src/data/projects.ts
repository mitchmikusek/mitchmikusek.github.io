export interface Project {
  emoji: string;
  name: string;
  description: string;
  url: string;
  codeUrl?: string;
  year: string;
  active: boolean;
}

export const projects: Project[] = [
  {
    emoji: '🐝',
    name: 'Beewick LLC',
    description: 'Founder-led consultancy offering technology strategy, applied AI, agile delivery, and engineering coaching.',
    url: 'https://beewick.com',
    year: '2024 - present',
    active: true,
  },
  {
    emoji: '🎮',
    name: 'Steam Controller Flash Tool',
    description: 'Flash BLE firmware onto the original Steam Controller from your browser using WebHID. Zero installs.',
    url: 'https://steamcontroller.tools',
    codeUrl: 'https://github.com/mitchmikusek/steam_controller_tools',
    year: '2026 - present',
    active: true,
  },
  {
    emoji: '🃏',
    name: 'DangPacks',
    description: 'Digital card trading platform for streamer Dan Gheesling - 5k users, 20k+ cards.',
    url: 'https://dangpacks.com',
    year: '2021 - present',
    active: true,
  },
  {
    emoji: '🥐',
    name: 'Arsicault Bakery',
    description: 'Website for SF bakery, establishing web presence and enabling online ordering.',
    url: 'https://arsicault-bakery.com',
    year: '2020 - present',
    active: true,
  },
  {
    emoji: '📺',
    name: 'DanGheesling.com',
    description: 'Intro page for reality TV show and Twitch streamer Dan Gheesling.',
    url: 'https://dangheesling.com',
    year: '2024',
    active: false,
  },
  {
    emoji: '🐺',
    name: 'WLVS Portfolio',
    description: 'Personal portfolio site for Twitch streamer wlvsatmydoor.',
    url: 'https://portfolio.wlvs.tv',
    year: '2022',
    active: false,
  },
  {
    emoji: '🏒',
    name: 'Wicked Wristers',
    description: 'Player database and streaming frontend for simulated hockey games.',
    url: 'https://db.wickedwristers.io/skaters',
    year: '2021',
    active: false,
  },
  {
    emoji: '📱',
    name: 'Asia Pacific Professional Managers App',
    description: 'Mobile app for APMA showcasing content via Wordpress CMS with live chat and native sharing.',
    url: '',
    year: '2016',
    active: false,
  },
];
