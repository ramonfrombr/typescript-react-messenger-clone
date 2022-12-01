import Pusher from 'pusher';
import ClientPusher from 'pusher-js';

export const serverPusher = new Pusher({
    appId: "1516358",
    key: "a3fda9db7f5ca4d399f4",
    secret: "2a3772a0aaa3ee6fed4e",
    cluster: "ap3",
    useTLS: true
});

export const clientPusher = new ClientPusher('a3fda9db7f5ca4d399f4', {
    cluster: 'ap3',
    forceTLS: true
})

