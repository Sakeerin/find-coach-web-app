export default{
    async login(context, payload) {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyApmtnH0BKNzDrBtyUHW9lKCNd5v1UsCQI',{
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true,
            })
        });
        const responseData = await response.json();

        if(!response.ok){
            console.log(responseData);
            const error = new Error(responseData.message || 'Failed to authenticate. Check your login data.');
            throw error;
        }
        console.log(responseData);
        context.commit('setUser',{
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn,
        });
    },
    async signup(context, payload){
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyApmtnH0BKNzDrBtyUHW9lKCNd5v1UsCQI',{
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true,
            })
        });

        const responseData = await response.json();

        if(!response.ok){
            console.log(responseData);
            const error = new Error(responseData.message || 'Failed to authenticate. Check your login data.');
            throw error;
        }
        console.log(responseData);
        context.commit('setUser',{
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn,
        });
    },
};