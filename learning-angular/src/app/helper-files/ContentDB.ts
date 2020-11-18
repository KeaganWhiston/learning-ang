import {Content} from './content-interface';

export const CONTENTLIST: Content[] = [{
  id: 0,
  author: 'Bob Ross',
  title: 'Forest Landscape',
  body: 'Painting of a forest and there are trees',
  type: 'art',
  tags: ['painting', 'art'],
  imageUrl: 'https://i.pinimg.com/originals/1f/34/c1/1f34c19665b48363b0b2dca74c59c101.jpg'
}, {
  id: 1,
  author: 'Tod Howard',
  title: 'Elder Scrolls - Skyrim',
  body: 'This game has been ported at least 5 times',
  type: 'game',
  tags: ['action', 'rpg', 'storydriven'],
  imageUrl: 'https://www.nintendo.com/content/dam/noa/en_US/games/switch/t/the-elder-scrolls-v-skyrim-switch/the-elder-scrolls-v-skyrim-switch-hero.jpg'
}, {
  id: 2,
  author: 'Acid Wizard Studio',
  title: 'Darkwood',
  body: 'Darkwood - a new perspective on survival horror. Scavenge and explore a rich, ever-changing free-roam world by day, then hunker down in your hideout and pray for the morning light.',
  type: 'game',
  tags: ['horror', 'survival'],
  imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Darkwood_cover.jpg'
}, {
  id: 3,
  author: 'White Rabbit',
  title: 'Death\'s Gambit',
  body: ' Death\'s Gambit is a hardcore 2D action platformer with rich RPG elements. Master the precise combat, utilizing a wide variety of weapons and abilities to confront the horrors that lurk deep within Siradon. Explore a mysterious and unforgiving world to uncover the true price of immortality.',
  type: 'game',
  tags: ['action', 'rpg', 'souls like'],
  imageUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/356650/capsule_616x353.jpg?t=1562955102'
}, {
  id: 4,
  author: 'Kinetic Games',
  title: 'Phasmophobia',
  body: 'Phasmophobia is a 4 player online co-op psychological horror where you and your team members of paranormal investigators will enter haunted locations filled with paranormal activity and gather as much evidence of the paranormal as you can.',
  type: 'game',
  tags: ['horror', 'coop']
  // imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/739630/capsule_616x353.jpg?t=1602270061'
}];
