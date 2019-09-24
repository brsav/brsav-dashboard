export const TOKEN_KEY_APP = "consumir api e jogar o token aki";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY_APP) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY_APP);
export const login = tokenApp => {
    localStorage.setItem(TOKEN_KEY_APP, tokenApp);
};
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY_APP);
};