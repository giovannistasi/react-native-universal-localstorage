# react-native-universal-localstorage

A small drop-in replacement for localStorage that works the same way on both React Native and the web. It gives you one consistent API for saving and reading data across platforms.

Note that `setItem`, `removeItem`, and `clear` are async and return promises.

## 📦 Installation

```bash
npm install react-native-universal-localstorage
```

## 🚀 Usage

```javascript
import localStorage from 'react-native-universal-localstorage';

// Initialize storage (required on React Native)
await localStorage.init();

await localStorage.setItem('key', 'value');
```

## 📚 API Reference

- `init()`: Promise<Array> - Initialize storage
- `getItem(key)`: any - Get value synchronously
- `setItem(key, value)`: Promise - Store value asynchronously
- `removeItem(key)`: Promise - Remove value asynchronously
- `getAllKeys()`: Array - Get all keys synchronously
- `clear()`: Promise - Clear all data asynchronously

## 📄 License

MIT © [Giovanni Stasi](https://github.com/giovannistasi)