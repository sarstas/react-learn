import type { IMenu } from "./menu.interface";
import type { IReviews } from "./reviews.interface";

export interface IRestaurant {
    id: string;
    name: string;
    menu: IMenu[];
    reviews: IReviews[];
}