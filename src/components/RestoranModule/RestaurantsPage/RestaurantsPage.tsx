import { Restaurant } from "../Restaurant/Restaurant";
import type { IRestaurant } from "../../../interface/restaurant.interface";

export const RestaurantsPage = ({restaurants}: { restaurants: IRestaurant[] }) => {
    return (
        <div className="restaurants-page">
            {restaurants.map((restaurant) => (
                <Restaurant
                    key={restaurant.id}
                    restaurant={restaurant}>
                    {restaurant.name}
                </Restaurant>
            ))}
        </div>
    );
};
