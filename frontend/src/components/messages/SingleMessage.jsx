import React from 'react'
import { useAuthContext } from '../../context/AuthContext.jsx';
import useConversation from '../../zustand/useConversation.js';
import { extractTime } from '../../utils/extractTime.js';

const SingleMessage = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const isMe = authUser?._id === message.senderId;
    const chatClassName = isMe ? 'chat chat-end' : 'chat chat-start';
    const profile = isMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleColor = isMe ? 'bg-sky-500' : '';
    const formattedTime = extractTime(message.createdAt);
    const shouldShakeClass = message.shake ? 'shake' : '';
    return (
        <div className={`chat ${chatClassName}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img alt='Tailwind CSS chat bubble component' src={profile} />
                </div>
            </div>
            <div className={`chat-bubble text-white pb-2 ${bubbleColor} ${shouldShakeClass}`}>{message.message}</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-black'>{formattedTime}</div>
        </div>
    )
}

export default SingleMessage