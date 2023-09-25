import {NextApiRequest, NextApiResponse} from 'next'

export function get(req: NextApiRequest, res: NextApiResponse) {
    
    console.log(req.cookies)

    res.json({
        message: 'Hello World!'
    })
}