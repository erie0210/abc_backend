import { BakeriesService } from './bakeries.service';
export declare class BakeriesController {
    private readonly bakeriesService;
    constructor(bakeriesService: BakeriesService);
    getAllBakeries(): string;
    getOneBakery(): string;
    createBakery(): string;
    updateBakery(): string;
    deleteBakery(): string;
}
