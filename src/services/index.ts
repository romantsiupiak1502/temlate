import { apiServiceCreator, mockApiServiceCreator } from "./apiService";

export const apiService = apiServiceCreator("");

export const mockApiService = mockApiServiceCreator();

export * as languageService from './languageService';
