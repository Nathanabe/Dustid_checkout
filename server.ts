import express, { Request, Response } from 'express';

const app = express();
const port = 5000;

app.get('/giftAdress', (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        data: {
            recipientName: 'John Doe',
            recipientAddress: '123 Main St, Anytown, USA',
        },
    });
});

app.listen(port, () => {
    console.log(`Mock API server running at http://localhost:${port}`);
});