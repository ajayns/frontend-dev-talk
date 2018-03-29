import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const Post = ({ url, title, author, selftext, thumbnail }) => (    
    <Card href={url} style={{width: '100%'}}>
        <Card.Content>
            {thumbnail !== "self" && <Image floated='right' src={thumbnail} />}
            <Card.Header>{title}</Card.Header>
            <Card.Meta>by {author}</Card.Meta>
            <Card.Description>{selftext}</Card.Description>
        </Card.Content>
    </Card>
)

export default Post