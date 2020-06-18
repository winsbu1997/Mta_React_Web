import createAPIServices from '../helpers/createAPIServices'

const api = createAPIServices()

export const postCapture = (data) => {
    return api.makeRequest({
        url: '/api/v1/capture',
        method: 'POST',
        data
    })
}

export const getListCapture = () => {
    return api.makeAuthRequest({
        url: '/api/v1/capture',
        method: 'GET'
    })
}

export const updateCapture = (data, capture_id) => {
    return api.makeAuthRequest({
        url: `/api/v1/capture/${capture_id}`,
        method: 'PUT',
        data
    })
}

export const deleteCapture = (capture_id) => {
    return api.makeAuthRequest({
        url: `/api/v1/capture/${capture_id}`,
        method: 'DELETE'
    })
}

export const getCapture = (capture_id) => {
    return api.makeAuthRequest({
        url: `/api/v1/capture/${capture_id}`,
        method: 'GET'
    })
}