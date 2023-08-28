import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';
import { AGE_CERTIFICATIONS, GENRES } from '../constants';

export const generateTitles = (entries = 150) => {
  const titles = [];

  for (let index = 0; index < entries; index++) {
    const title = {
      id: faker.string.uuid(),
      title: faker.music.songName(),
      description: faker.lorem.paragraph(),
      release_year: faker.date.past({ years: 50 }).getFullYear(),
      age_certification: faker.helpers.arrayElement(AGE_CERTIFICATIONS),
      runtime: faker.number.int({ min: 10, max: 180 }),
      genres: faker.helpers.arrayElement(GENRES),
      production_country: faker.location.countryCode('alpha-3'),
      seasons: faker.helpers.arrayElement([
        faker.number.int({ min: 1, max: 5 }),
        null,
      ]),
    };

    const invalidTitle = faker.helpers.maybe(
      () => ({
        id: faker.helpers.arrayElement([
          faker.date.past({ years: 50 }).getFullYear(),
          null,
        ]),
        title: faker.helpers.arrayElement([
          faker.date.past({ years: 50 }),
          null,
        ]),
        description: faker.lorem.paragraph(),
        release_year: faker.helpers.arrayElement([
          faker.helpers.arrayElement(AGE_CERTIFICATIONS),
          null,
        ]),
        age_certification: faker.helpers.arrayElement([
          faker.helpers.arrayElement(AGE_CERTIFICATIONS),
          null,
        ]),
        runtime: faker.helpers.arrayElement([
          faker.date.past({ years: 50 }).getFullYear(),
          null,
        ]),
        genres: faker.helpers.arrayElement([
          faker.number.int({ min: 10, max: 180 }),
          null,
        ]),
        production_country: faker.helpers.arrayElement([
          faker.helpers.arrayElement(GENRES),
          null,
        ]),
        seasons: faker.helpers.arrayElement([
          faker.location.countryCode('alpha-3'),
          null,
        ]),
      }),
      { probability: 0.1 },
    );

    titles.push(invalidTitle || title);
  }

  return titles;
};
