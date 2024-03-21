'use client'

import React, { Suspense, useState } from 'react'

import MainLayout from './components/layout/MainLayout';
import PaginationControls from './components/controller/PaginationControls';
import { unstable_noStore } from 'next/cache';

const Posts = ({ posts }: { posts: any }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <>
      <ul className='space-y-2'>
        {currentPosts.map((post: any) => (
          <li key={post.id} className='p-2 border rounded'>
            <span className='text-sm font-semibold italic'>#{post.id}</span>
            <h3 className='font-semibold text-lg'>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <PaginationControls
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  )
}

const HomePage = async () => {

  unstable_noStore();
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  return (
    <MainLayout>
      <div className='space-y-4'>
        <h1 className='font-bold text-2xl uppercase'>Posts</h1>
        <Suspense fallback={<p>Loading...</p>}>
          <Posts posts={posts} />
        </Suspense>
      </div>
    </MainLayout>
  )
}

export default HomePage