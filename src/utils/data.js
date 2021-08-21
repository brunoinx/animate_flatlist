import React from 'react';
import faker from "faker";

faker.seed(10);
export const DATA = [...Array(30).keys()].map((_, idx) => {
  return {
    key: faker.datatype.uuid(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
      "women",
      "men",
    ])}/${faker.datatype.number(60)}.jpg`,
    name: faker.name.findName(),
    ocupation: faker.name.jobTitle(),
    email: faker.internet.email(),
  };
});
