import React from 'react'
import SingleConversation from './SingleConversation'

function Conversations() {
    return (
        <div className='flex flex-col overflow-auto py-2'>
            <SingleConversation />
            <SingleConversation />
            <SingleConversation />
            <SingleConversation />
            <SingleConversation />
            <SingleConversation />
            <SingleConversation />
        </div>
    )
}

export default Conversations