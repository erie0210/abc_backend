import { CalculatorsService } from './calculators.service';
export declare class CalculatorsController {
    private readonly calculatorService;
    constructor(calculatorService: CalculatorsService);
    getRecipeToCalculator(): string;
}
