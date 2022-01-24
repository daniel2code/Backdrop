import {nanoid} from 'nanoid/non-secure';

const ID = nanoid();

export const saveCatObj = values => {
  return {
    id: ID,
    name: values?.name || "dummy",
    uri: values?.image?.url || "test",
  };
};
