import { Movie } from "./movie";

 export interface Seance {
    id?: string;
    movie: Movie;
    room: string;
    date: Date;
    sold_tickets: number;
    available_tickets: number;
    seats_taken: Array<number>;
}
