// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


type Data = {
    msg: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        const { email, subject, message } = req.body;

        console.log('API Key:', process.env.MAILJET_API_KEY);
        console.log('Secret Key:', process.env.MAILJET_SECRET_KEY);

        const mailjet = require('node-mailjet').connect(process.env.MAILJET_API_KEY, process.env.MAILJET_SECRET_KEY);

        const request = mailjet
            .post("send", { 'version': 'v3.1' })
            .request({
                "Messages": [
                    {
                        "From": {
                            "Email": email,
                            "Name": email,
                        },
                        "To": [
                            {
                                "Email": "nicotourne@gmail.com",
                                "Name": "Nicolas"
                            }
                        ],
                        "Subject": subject,
                        "TextPart": message,
                        "HTMLPart": message,
                        "CustomID": "AppGettingStartedTest"
                    }
                ]
            });

        request
            .then((response: any) => {
                console.log(response.body);
                return res.status(200).json({
                    msg: 'Message sent'
                })
            })
            .catch((err: any) => {
                console.log(err.statusCode)
                console.log(err)
                return res.status(err.statusCode || 500).json({ msg: 'Error sending message' });
            });

    }
    catch (err) {
        return res.status(412).json({ msg: 'Error sending message' });
    }
}
