import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Navbar extends Component {
    state = { activeItem: 'react' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div style={{ margin: '1rem' }}>
                <Menu pointing secondary>
                    <Menu.Item name='react' active={activeItem === 'react'} onClick={this.handleItemClick} />
                    <Menu.Item name='frontend' active={activeItem === 'frontend'} onClick={this.handleItemClick} />
                    <Menu.Item name='webdev' active={activeItem === 'webdev'} onClick={this.handleItemClick} />
                    <Menu.Item name='javascript' active={activeItem === 'javascript'} onClick={this.handleItemClick} />
                    <Menu.Item name='open source' active={activeItem === 'open source'} onClick={this.handleItemClick} />
                    <Menu.Item name='programming' active={activeItem === 'programming'} onClick={this.handleItemClick} />
                    <Menu.Item name='learn javascript' active={activeItem === 'learn javascript'} onClick={this.handleItemClick} />
                    <Menu.Menu position='right'>
                        <Menu.Item name='refresh' active={activeItem === 'refresh'} onClick={this.handleItemClick} />
                        <Menu.Item name='info' active={activeItem === 'info'} onClick={() => console.log('author')} />
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}
