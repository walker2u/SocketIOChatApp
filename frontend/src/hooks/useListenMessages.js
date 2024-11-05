import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext';
import useConversation from '../zustand/useConversation.js';
import notificationSound from '../assets/sounds/notification.mp3';

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation();

    useEffect(() => {
        socket?.on("newMessage", (data) => {
            data.shake = true;
            const sound = new Audio(notificationSound);
            sound.play();
            setMessages([...messages, data])
        })
    }, [socket, messages, setMessages]);
    return socket?.off("newMessage");
}

export default useListenMessages