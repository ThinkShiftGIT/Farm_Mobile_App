import Auth0 from 'react-native-auth0';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTH0_DOMAIN, AUTH0_CLIENT_ID } from '@env';

const auth0 = new Auth0({
  domain: AUTH0_DOMAIN,
  clientId: AUTH0_CLIENT_ID,
});

export const login = async () => {
  try {
    const credentials = await auth0.webAuth.authorize({
      scope: 'openid profile email',
    });
    await AsyncStorage.setItem('accessToken', credentials.accessToken);
    return credentials;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await auth0.webAuth.clearSession();
    await AsyncStorage.removeItem('accessToken');
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};

export const getAccessToken = async () => {
  return await AsyncStorage.getItem('accessToken');
};

export const isAuthenticated = async () => {
  const token = await getAccessToken();
  return !!token;
};
