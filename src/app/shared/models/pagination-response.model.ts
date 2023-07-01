export class PaginationResponse<T> {
    data: T[] = [];
    total!: number;
}
