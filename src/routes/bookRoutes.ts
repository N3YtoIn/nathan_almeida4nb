import { Router } from 'express';
import { getAllBooks, addBook } from '../controllers/bookController';

const router = Router();

router.get('/books', getAllBooks);
router.post('/registerbooks', addBook);

export default router;