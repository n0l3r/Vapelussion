import apiManager from "./apiManager";

const getNotification = async (userId, token) => {
    const response = await apiManager.get(`/notification/${userId}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-access-token': token
        }
    });
    return ({data: response.data, status: response.status});
}

const addNotification = async (data, token) => {
    const response = await apiManager.post('/notification/add', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'x-access-token': token
        },
        data: data
    });
    return ({data: response.data, status: response.status});
}

const deleteNotification = async (notificationId, token) => {
    const response = await apiManager.delete(`/notification/delete/${notificationId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'x-access-token': token
        }
    });
    return ({data: response.data, status: response.status});
}


export {
    getNotification,
    addNotification,
    deleteNotification
}