"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRecipe = exports.updateRecipe = exports.createRecipe = exports.getRecipe = exports.privateRecipe = exports.publicRecipe = exports.RecipeService = void 0;
const model_1 = require("./model");
const common_1 = require("@nestjs/common");
let RecipeService = class RecipeService {
    hiRecipeServiceProduct() {
        return 'hello recipe';
    }
};
RecipeService = __decorate([
    (0, common_1.Injectable)()
], RecipeService);
exports.RecipeService = RecipeService;
const publicRecipe = (req, res) => {
    try {
        const recipes = model_1.Recipe;
        res.status(200).send({
            success: true,
            data: {
                recipes,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error,
        });
    }
};
exports.publicRecipe = publicRecipe;
const privateRecipe = (req, res) => {
    try {
        const params = req.params;
        const recipes = model_1.Recipe;
        res.status(200).send({
            success: true,
            data: {
                recipes,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error,
        });
    }
};
exports.privateRecipe = privateRecipe;
const getRecipe = (req, res) => {
    try {
        const params = req.params;
        const recipe = model_1.Recipe.find((recipe) => {
            return recipe.id === parseInt(params.id);
        });
        res.status(200).send({
            success: true,
            data: {
                recipe,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error,
        });
    }
};
exports.getRecipe = getRecipe;
const createRecipe = (req, res) => {
    try {
        const data = req.body;
        model_1.Recipe.push(data);
        res.status(200).send({
            success: true,
            data: { data },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error,
        });
    }
};
exports.createRecipe = createRecipe;
const updateRecipe = (req, res) => {
    try {
        const params = req.params;
        const body = req.body;
        let result;
        model_1.Recipe.forEach((recipe) => {
            if (recipe.id === parseInt(params.id)) {
                recipe = body;
                result = recipe;
            }
        });
        res.status(200).send({
            success: true,
            data: { recipe: result },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error,
        });
    }
};
exports.updateRecipe = updateRecipe;
const deleteRecipe = (req, res) => {
    try {
        const params = req.params;
        const newRecipe = model_1.Recipe.filter((recipe) => recipe.id !== parseInt(params.id));
        res.status(200).send({
            success: true,
            data: { newRecipe },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error,
        });
    }
};
exports.deleteRecipe = deleteRecipe;
//# sourceMappingURL=service.js.map