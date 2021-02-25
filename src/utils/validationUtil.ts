import { AgeMilliseconds } from '../consts';

export const isRequired = (value: string) => !!value;
export const isEmail = (value: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
export const isPassword = (value: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value);
export const isFuture = (value: string) => Date.now() > Date.parse(value);
export const isAdult = (value: string) => (Date.now() - Date.parse(value)) > AgeMilliseconds;
export const passwordMatching = (value: string, newValue: string | undefined) => value === newValue;
