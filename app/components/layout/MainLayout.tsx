import React from 'react'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='px-32 py-16'>
            {children}
        </main>
    )
}

export default MainLayout