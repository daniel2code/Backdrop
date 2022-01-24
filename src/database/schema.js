import Realm from 'realm';
import {Alert} from 'react-native';

const CatSchema = {
  name: 'AddCat',

  properties: {
    id: 'string',
    name: 'string',
    uri: 'string?',
  },
  primaryKey: 'id',
};

const realm = new Realm({schema: [CatSchema], path: 'myrealm'});

export const addCatToDataBase = data => {
  realm.write(() => {
    realm.create('AddCat', data, true);
     Alert.alert('Database Message', 'Cat has been added to your favorites');
    // console.log(`created two tasks: ${data.name} & ${data.uri}`);.
  });
};

export const retrieveData = cb => {
  const tasks = realm.objects('AddCat');
  cb(tasks);

  return tasks;
};

// export const deleteAllData = () => {
//   const data = realm.objects('AddCat');
//   realm.deleteAll(data);
// };
