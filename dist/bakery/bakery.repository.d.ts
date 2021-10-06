import { Model } from 'mongoose';
import { Bakery } from './bakery.schema';
import { BakeryRequestDto } from './dto/bakery.request.dto';
export declare class BakeryRepository {
    private readonly bakeryModel;
    constructor(bakeryModel: Model<Bakery>);
    findAll(): Promise<Bakery[]>;
    findOne(id: string): Promise<Bakery>;
    create(bakery: BakeryRequestDto): Promise<Bakery>;
    update(id: string, data: any): Promise<Bakery>;
    delete(id: string): Promise<Bakery>;
}
