import './RestaurantList.scss';
import type { IRestaurant } from "../../../interface/restaurant.interface";

interface RestaurantListProps {
    restaurantsList: IRestaurant[];
    activeId: string;
    onTabClick: (id: string) => void;
}

export const RestaurantList = ({ restaurantsList, activeId, onTabClick }: RestaurantListProps) => {
    return (
        <div className="restaurant-tabs" role="tablist">
            {restaurantsList.map((restaurant) => (
                <button
                    key={restaurant.id}
                    className={`restaurant-tabs__tab ${restaurant.id === activeId ? "active" : ""}`}
                    onClick={() => onTabClick(restaurant.id)}
                >
                    {restaurant.name}
                </button>
            ))}
        </div>
    );
};
