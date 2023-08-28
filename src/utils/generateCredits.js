import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';
import { ROLES } from '../constants';

export const generateCredits = (titles = []) =>
  titles.map((title) => {
    const credit = {
      id: faker.string.uuid(),
      title_id: title.id,
      real_name: `${faker.person.firstName()} ${faker.person.lastName()}`,
      character_name: `${faker.person.firstName()} ${faker.person.lastName()}`,
      role: faker.helpers.arrayElement(ROLES),
    };

    const invalidCredit = {
      id: faker.helpers.arrayElement([faker.number.int(), null]),
      title_id: faker.helpers.arrayElement([
        faker.date.past({ years: 50 }),
        null,
      ]),
      real_name: faker.helpers.arrayElement([faker.number.int(), null]),
      character_name: null,
      role: faker.helpers.arrayElement([faker.number.int(), null]),
    };

    return typeof title.id === 'string' ? credit : invalidCredit;
  });
