import AsyncStorage from '@react-native-community/async-storage';

const STORAGE_KEY = 'catDataStore';

export const saveData = async data => {
  //   const [getStoreValue, setStoreValue] = useState(null);

  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    alert('Data successfully saved');
  } catch (e) {
    alert('Failed to save the data to the storage');
    console.log(e);
  }
};
