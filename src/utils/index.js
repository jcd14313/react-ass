export const loadSession = (sessionId) => {
  // Needs try/catch block in case the user blocked local storage feature
  try {
    const serializedState = window.localStorage.getItem(sessionId);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return error;
  }
};

export const saveSession = (sessionId, userSessionData) => {
  // Needs try/catch block in case the user blocked local storage feature
  try {
    const serializedState = JSON.stringify(userSessionData);
    window.localStorage.setItem(sessionId, serializedState);
  } catch (error) {
    return error;
  }
};

export const purgeSession = (sessionId) => {
  // Needs try/catch block in case the user blocked local storage feature
  try {
    window.localStorage.removeItem(sessionId);
  } catch (error) {
    return error;
  }
};

export const getErrors = (resp) => {
  if (Array.isArray(resp.errors)) {
    return resp.errors[0];
  }
  return resp.errors;
};

export const Capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
