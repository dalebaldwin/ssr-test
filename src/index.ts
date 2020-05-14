import express from 'express'

import home from './home'

const server = express()

server.get('/', (req: any,res: any) => {
    res.send(home())
})

server.listen(3000, () => console.log("SSR testing example booted up on port 3000"))
