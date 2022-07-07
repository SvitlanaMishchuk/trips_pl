export interface GeographyEntity {
  id: number;
  title: string;
  content: string;
  image: string;
}

export const geographyList: Array<GeographyEntity> = [
  {
    id: 1,
    title: 'Europe',
    content:
      'Ancient heritage combined with modernity. Majestic architecture, rich history and a peculiar combination of modernity and the Middle Ages.',
    image: './../../../assets/images/europe.jpeg',
  },
  {
    id: 2,
    title: 'Asia',
    content:
      'Nature rich in its diversity, which fascinates everyone. Tropical forests, incredible waterfalls, picturesque islands and unique beaches.',
    image: './../../../assets/images/asia.jpeg',
  },
  {
    id: 3,
    title: 'America',
    content:
      'A unique combination of the metropolis and nature. National parks, skyscrapers, hundreds of kilometers of picturesque landscapes that change faster than you can imagine.',
    image: './../../../assets/images/america.jpeg',
  },
  {
    id: 4,
    title: 'Africa',
    content:
      'Wild nature in all its beauty. Unforgettable safari in national parks, boundless deserts and unique traditions of ethnic peoples of the continent.',
    image: './../../../assets/images/africa.jpeg',
  },
];
