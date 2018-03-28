import React from 'react'
import { Menu } from 'semantic-ui-react'

const Navbar = (subreddit, handleMenuChange, handleRefreshClick) => (
    <div style={{ margin: '1rem' }}>
        <Menu pointing secondary>
            <Menu.Item name='react' active={subreddit === 'react'} onClick={handleItemClick} />
            <Menu.Item name='frontend' active={subreddit === 'frontend'} onClick={handleItemClick} />
            <Menu.Item name='webdev' active={subreddit === 'webdev'} onClick={handleItemClick} />
            <Menu.Item name='javascript' active={subreddit === 'javascript'} onClick={handleItemClick} />
            <Menu.Item name='open source' active={subreddit === 'opensource'} onClick={handleItemClick} />
            <Menu.Item name='programming' active={subreddit === 'programming'} onClick={handleItemClick} />
            <Menu.Item name='learn javascript' active={subreddit === 'learnjavascript'} onClick={handleItemClick} />
            <Menu.Menu position='right'>
                <Menu.Item name='refresh' onClick={() => console.log('refresh')} />
                <Menu.Item name='info' onClick={() => console.log('author')} />
            </Menu.Menu>
        </Menu>
    </div>
)

export default Navbar