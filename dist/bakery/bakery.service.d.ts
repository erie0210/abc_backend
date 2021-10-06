import { BakeryRepository } from './bakery.repository';
import { BakeryRequestDto } from './dto/bakery.request.dto';
export declare class BakeryService {
    private readonly bakeryRepository;
    constructor(bakeryRepository: BakeryRepository);
    getAllBakery(page: any): Promise<import("./bakery.schema").Bakery[]>;
    getOneBakery(id: string): Promise<import("./bakery.schema").Bakery>;
    createBakery(bakery: BakeryRequestDto): Promise<import("./bakery.schema").Bakery>;
    updateBakery(id: string, data: any): Promise<import("./bakery.schema").Bakery>;
    deleteBakery(id: string): Promise<import("./bakery.schema").Bakery>;
}
