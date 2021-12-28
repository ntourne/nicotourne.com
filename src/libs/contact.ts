import API from './api';

export const sendContact = (email: string, subject: string, message: string) => {
    return API.post('api/contact', { email, subject, message });
}