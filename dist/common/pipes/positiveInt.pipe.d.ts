import { PipeTransform } from '@nestjs/common';
export declare class PositiveIntPipe implements PipeTransform {
    transform(value: number): number;
}
