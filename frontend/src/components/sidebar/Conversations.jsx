import React from 'react'
import SingleConversation from './SingleConversation'
import { useGetConversations } from '../../hooks/useGetConversations.js'
import { getRandomEmoji } from '../../utils/emojis.js'

function Conversations() {
    const { laoding, conversations } = useGetConversations();
    return (
        <div className='flex flex-col overflow-auto py-2'>
            {
                laoding && <span className='loading loading-spinner mx-auto'></span>
            }
            {
                conversations.map((conversation, idx) => (
                    <SingleConversation key={conversation._id} conversation={conversation} emoji={getRandomEmoji()} lastidx={idx === conversations.length - 1} />
                ))
            }
        </div>
    )
}

export default Conversations