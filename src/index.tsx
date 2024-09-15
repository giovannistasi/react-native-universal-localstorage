import functions from './Storage';
import { Platform } from 'react-native';

const localStorage = {
  async init() {
    try {
      const value = await functions.init();
      return value;
    } catch (error) {
      console.error('Error Initializing functions', error);
      return null;
    }
  },
  getItem(key: string) {
    try {
      const value = functions.getItem(key);
      return value;
    } catch (error) {
      console.error('Error getting item from localStorage', error);
      return null;
    }
  },
  async setItem(key: string, value: any) {
    try {
      await functions.setItem(key, value);
    } catch (error) {
      console.error('Error setting item to localStorage', error);
    }
  },
  async removeItem(key: string) {
    try {
      await functions.removeItem(key);
    } catch (error) {
      console.error('Error removing item from localStorage', error);
    }
  },
  async clear() {
    try {
      await functions.clear();
    } catch (error) {
      console.error('Error clearing localStorage', error);
    }
  },
  getAllKeys() {
    try {
      const keys = functions.getAllKeys();
      return keys;
    } catch (error) {
      console.error('Error getting all keys from localStorage', error);
      return [];
    }
  },
};

if (Platform.OS !== 'web') {
  // @ts-ignore
  global.localStorage = localStorage;
}

export default localStorage;
