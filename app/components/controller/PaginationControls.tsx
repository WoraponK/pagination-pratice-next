import React, { FC } from 'react'
import Link from 'next/link';

interface PaginationControlsProps {
    postsPerPage: number;
    totalPosts: number;
    paginate: any;
    currentPage: number;
}

const PaginationControls: FC<PaginationControlsProps> = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers: number[] = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='flex space-x-2'>
                {pageNumbers.map(number => (
                    <li
                        key={number}
                        className={`h-[30px] aspect-square cursor-pointer rounded flex justify-center items-center transition-all active:scale-95 
                            ${number === currentPage
                                ? 'bg-stone-700 text-white hover:bg-stone-500'
                                : 'bg-transparent border'
                            }`}
                        onClick={() => paginate(number)}>
                        {number}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default PaginationControls