import Realm from 'realm';

export const CATLIST_SCHEMA = 'CatList';
export const CAT_SCHEMA = 'CAT';

export const CATSCHEMA = {
  name: CAT_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: {type: 'string', indexed: true},
    uri: {type: 'string', indexed: true},
  },
};

export const CATLISTSCHEMA = {
  name: CATLIST_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    catData: {type: 'list', objectType: CAT_SCHEMA},
  },
};

const databaseOptions = {
  path: 'catListApp.realm',
  schema: [CATLISTSCHEMA, CATSCHEMA],
  schemaVersion: 0,
};

export const insertNewCatData = data =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          realm.create(CATLIST_SCHEMA, data, true);
          resolve(data);
          console.log(data)
          alert("Data saved successfully")
        });
      })
      .catch(error => reject(error), alert("Data failed to save"));
  });

export const queryAllCatList = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        let allCats = realm.objects(CATLIST_SCHEMA);
        resolve(allCats);
        alert("Data saved successfully")
      })
      .catch(error => {
        reject(error);
        alert("Data failed to save")
      });
  });


  export default new Realm(databaseOptions)