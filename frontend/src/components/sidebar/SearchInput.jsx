import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation.js';
import { useGetConversations } from '../../hooks/useGetConversations.js';
import toast from 'react-hot-toast';

function SearchInput() {
    const [search, setSearch] = useState('');
    const { setSelectedConversation } = useConversation();
    const { conversations } = useGetConversations();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        if (search.length < 3) {
            toast.error('Please enter at least 3 characters');
            return;
        }
        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));
        if (conversation) {
            setSelectedConversation(conversation);
            setSearch('');
        }
        else {
            toast.error('User not found');
        }
    }

    return (
        <form onSubmit={handleSubmit} className='flex items-center gap-2'>
            <input onChange={(e) => setSearch(e.target.value)} type='text' placeholder='Search…' className='input input-bordered rounded-full' />
            <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
                <IoSearchSharp className='w-6 h-6 outline-none' />
            </button>
        </form>
    )
}

export default SearchInput