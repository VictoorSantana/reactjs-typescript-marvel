



export const isValidToken = () => {
    const token = localStorage.getItem('authToken');
    let isAuth = false;
    if (token !== null && token !== undefined) {
        isAuth = token.trim().length > 0;
    }
    return isAuth;
}
