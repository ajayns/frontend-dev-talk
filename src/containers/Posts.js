import React from 'react'

import Post from '../components/Post'

const Posts = ({ posts }) => (
    <div style={{ margin: '2rem' }}>
        {posts.map((post, i) => <Post key={i} {...post} />)}
    </div>
)

export default Posts