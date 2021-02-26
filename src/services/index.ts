import { localStorageService } from './storageService';
import { apiServiceCreator, mockApiServiceCreator } from "./apiService";

export const apiService = apiServiceCreator("");

export const mockApiService = mockApiServiceCreator();

export const storageService = localStorageService();

export * as languageService from './languageService';
