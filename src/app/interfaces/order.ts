import { Client } from "./client";
import { Offer } from "./offer";

export interface Order {
    id: string,
    client: Client,
    offer: Offer,
    tacken_date: number,
    accomplished: boolean,
}
