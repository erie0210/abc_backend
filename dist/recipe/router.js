"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("./service");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/recipe/public', service_1.publicRecipe);
router.get('/recipe/user/:id', service_1.privateRecipe);
router.get('/recipe/:id', service_1.getRecipe);
router.post('/recipe', service_1.createRecipe);
router.put('/recipe/update/:id', service_1.updateRecipe);
router.delete('/recipe/delete/:id', service_1.deleteRecipe);
exports.default = router;
//# sourceMappingURL=router.js.map