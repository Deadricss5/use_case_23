import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

export const generateCredits = (titles = []) =>
  titles.map((title) => ({
    id: faker.datatype.uuid(),
    title_id: title.id,
    real_name: `${faker.person.firstName()} ${faker.person.lastName()}`,
    character_name: `${faker.person.firstName()} ${faker.person.lastName()}`,
    role: faker.helpers.arrayElement([
      'Director',
      'Producer',
      'Screenwriter',
      'Actor',
      'Actress',
      'Cinematographer',
      'Film Editor',
      'Production Designer',
      'Costume Designer',
      'Music Composer',
    ]),
  }));
