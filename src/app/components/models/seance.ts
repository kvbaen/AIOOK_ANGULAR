export interface Seance {
    id?: string;
    movie?: string;
    room?: number;
    date?: string;
    time?: string;
    sold_tickets?: number;
    available_tickets?: number;
    seats_taken?: Array<any>;
}
