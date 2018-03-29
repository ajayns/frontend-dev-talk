import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'

const Navbar = ({selectedSub, handleMenuChange, handleRefreshClick}) => (
    <div style={{ margin: '1rem' }}>
        <Menu pointing secondary>
            <Menu.Item name='reactjs' active={selectedSub === 'reactjs'} onClick={handleMenuChange} />
            <Menu.Item name='frontend' active={selectedSub === 'frontend'} onClick={handleMenuChange} />
            <Menu.Item name='webdev' active={selectedSub === 'webdev'} onClick={handleMenuChange} />
            <Menu.Item name='javascript' active={selectedSub === 'javascript'} onClick={handleMenuChange} />
            <Menu.Item name='open source' active={selectedSub === 'opensource'} onClick={handleMenuChange} />
            <Menu.Item name='programming' active={selectedSub === 'programming'} onClick={handleMenuChange} />
            <Menu.Item name='learn javascript' active={selectedSub === 'learnjavascript'} onClick={handleMenuChange} />
            <Menu.Menu position='right'>
                <Menu.Item onClick={() => handleRefreshClick()}><Icon name='refresh' /></Menu.Item>
                <Menu.Item href="http://github.com/ajayns/" target="_blank"><Icon name='github' size="large" /></Menu.Item>
            </Menu.Menu>
        </Menu>
    </div>
)

export default Navbar