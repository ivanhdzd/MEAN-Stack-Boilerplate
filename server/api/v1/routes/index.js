import { Router } from 'express';

const router = new Router();

router.get('/hello/:name', ({ params: { name } }, res) => res.send({ message: `Hello ${ name }!` }));

export default router;