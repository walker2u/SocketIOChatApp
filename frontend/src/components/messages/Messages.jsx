import React, { useEffect, useRef } from 'react'
import SingleMessage from './SingleMessage.jsx'
import { useGetMessages } from '../../hooks/useGetMessages.js'
import MessageSkeleton from '../skeleton/MessageSkeleton.jsx'
import useListenMessages from '../../hooks/useListenMessages.js';

function Messages() {
    const { loading, messages } = useGetMessages();
    const lastMessageRef = useRef();

    useListenMessages();

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' })
        }, 100);
    }, [messages])

    return (
        <div className='px-4 flex-1 overflow-auto'>
            {
                loading ? [...Array(4)].map((_, idx) => <MessageSkeleton key={idx} />) : messages.map((message) =>
                    <div key={message._id} ref={lastMessageRef}>
                        <SingleMessage message={message} />
                    </div>
                )
            }
            {
                !loading && messages.length === 0 && <div className='text-black flex items-center justify-center  w-full'>Send a message to start a conversation</div>
            }
        </div>
    )
}

export default Messages