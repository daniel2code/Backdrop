import AsyncStorage from '@react-native-community/async-storage'

const STORAGE_KEY = 'catDataStore'


export const readData = async (cb) => {
    try {
      const catData = await AsyncStorage.multiGet([STORAGE_KEY, STORAGE_KEY])
  
      if (catData !== null) {
        let parsedData = JSON.parse(catData) 
        cb(parsedData)
      }
    } catch (e) {
      alert('Failed to fetch the data from storage')
      console.log(e);
    }
  }