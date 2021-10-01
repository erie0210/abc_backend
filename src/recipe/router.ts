import {
  createRecipe,
  deleteRecipe,
  getRecipe,
  privateRecipe,
  publicRecipe,
  updateRecipe,
} from './service';

import { NextFunction } from 'express-serve-static-core';
import { Router } from 'express';

const router = Router();

router.get('/recipe/public', publicRecipe);
router.get('/recipe/user/:id', privateRecipe);
router.get('/recipe/:id', getRecipe);
router.post('/recipe', createRecipe);
router.put('/recipe/update/:id', updateRecipe);
router.delete('/recipe/delete/:id', deleteRecipe);

export default router;
