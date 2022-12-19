import apiManager from "./apiManager";

const userLogin = async data => {
    const response = await apiManager.post('/auth/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        data: data
    });
    return ({data: response.data, status: response.status});
}

const userRegister = async (data) => {
    const response = await apiManager.post('/auth/register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        data: data
    });
    return ({data: response.data, status: response.status});
}

const updateProfile = async (data, userId, token) => {
    const response = await apiManager.put(`/auth/update/${userId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'x-access-token': token
        },
        data: data
    });
    return ({data: response.data, status: response.status});
}

export {
    userLogin,
    userRegister,
    updateProfile
}
