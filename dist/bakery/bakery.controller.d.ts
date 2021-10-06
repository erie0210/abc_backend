import { BakeryService } from './bakery.service';
import { BakeryRequestDto } from './dto/bakery.request.dto';
export declare class BakeryController {
    private readonly bakeryService;
    constructor(bakeryService: BakeryService);
    getAllBakery(): Promise<import("./bakery.schema").Bakery[]>;
    getOneBakery(id: string): Promise<import("./bakery.schema").Bakery>;
    createBakery(body: BakeryRequestDto): Promise<import("./bakery.schema").Bakery>;
    updateBakery(id: any, data: any): Promise<import("./bakery.schema").Bakery>;
    deleteBakery(id: string): Promise<import("./bakery.schema").Bakery>;
}
