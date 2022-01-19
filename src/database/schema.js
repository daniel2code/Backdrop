import Realm from 'realm';

const CatSchema = {
  name: 'AddCat',

  properties: {
    id: 'string',
    name: 'string',
    uri: 'string?',
  },
  primaryKey: 'id',
};

// const realm = await Realm.open({
//   path: 'myrealm',
//   schema: [CatSchema],
// });

const realm = new Realm({schema: [CatSchema], path: 'myrealm'});

export const addCatToDataBase = data => {
  realm.write(() => {
    realm.create('AddCat', data);
    alert('Cat added to database');
    console.log(`created two tasks: ${data.name} & ${data.uri}`);
  });
};

export const retrieveData = cb => {
  const tasks = realm.objects('AddCat');
  cb(tasks);
};
