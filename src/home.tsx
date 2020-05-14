import React from 'react'
import {renderToString} from 'react-dom/server'

const Content = () => {
    
    return (
        <>
            <h1>Testing Real Content</h1>
            <p>This content is rendered using react renderToString method</p>
        </>
    )
}

const HomePage = () => {

    return renderToString(
        <>
            <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>SSR</title>
            </head>
            <body>
                <Content/>
            </body>
            </html>
        </>
    )
}

export default HomePage