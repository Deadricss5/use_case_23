import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

export const generateTitles = (entries = 150) => {
  const titles = [];

  for (let index = 0; index < entries; index++) {
    const title = {
      id: faker.datatype.uuid(),
      title: faker.music.songName(),
      description: faker.lorem.paragraph(),
      release_year: faker.date.past({ years: 50 }).getFullYear(),
      age_certification: faker.helpers.arrayElement([
        '12',
        '12A',
        '15',
        '18',
        '18R',
        '6',
        '9',
        'A',
        'AL',
        'C',
        'CA',
        'E',
        'E10+',
        'EC',
        'G',
        'GP',
        'M',
        'M/PG',
        'MA15+',
        'NC-17',
        'PG-13',
        'PG',
        'R',
        'R16',
        'R18',
        'R18+',
        'R21',
        'S',
        'T',
        'TV-14',
        'TV-G',
        'TV-MA',
        'TV-PG',
        'TV-Y',
        'TV-Y7',
        'U',
        'U/A',
        'X18',
      ]),
      runtime: faker.number.int({ min: 10, max: 180 }),
      genres: faker.helpers.arrayElement([
        'Action',
        'Comedy',
        'Drama',
        'Fantasy',
        'Horror',
        'Thriller',
        'Western',
      ]),
      production_country: faker.location.countryCode('alpha-3'),
      seasons: faker.helpers.arrayElement([
        faker.number.int({ min: 1, max: 5 }),
        null,
      ]),
    };

    titles.push(title);
  }

  return titles;
};
