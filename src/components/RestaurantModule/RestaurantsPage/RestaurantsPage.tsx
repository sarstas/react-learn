import { useState } from "react";
import { Restaurant } from "../Restaurant/Restaurant";
import { restaurants } from "../../../../materials/mock";
import { RestaurantList } from "../RestaurantList/RestaurantList";

export const RestaurantsPage = () => {
    const [activeId, setActiveId] = useState(restaurants[0].id);
    const activeRestaurant = restaurants.find((restaurant) => restaurant.id === activeId);

    return (
        <div className="restaurants-page">
            <RestaurantList
                restaurantsList={restaurants}
                activeId={activeId}
                onTabClick={setActiveId}
            />
            {activeRestaurant && (
                <Restaurant key={activeRestaurant.id} restaurant={activeRestaurant} />
            )}
        </div>
    );
};
