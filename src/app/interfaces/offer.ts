import { Trade } from "./trade";
import { Trader } from "./trader";

export interface Offer {
    id: string,
    title: string,
    description: string,
    trade: Trade,
    trader: Trader,
    cost: number,
    delay: number,
    stars: number,
}
