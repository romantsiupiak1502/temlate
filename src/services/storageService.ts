type ISetItem = (key: string, value: any) => void;
type IGetItem = <T>(key: string) => T | null;
type IRemoveItem = (key: string) => void;

export const localStorageService = () => {
  const setItem: ISetItem = (key: string, value: any) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  const getItem: IGetItem = (key) => {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };
  const removeItem: IRemoveItem = (key: string) => {
    window.localStorage.removeItem(key);
  };

  return { setItem, getItem, removeItem };
};
