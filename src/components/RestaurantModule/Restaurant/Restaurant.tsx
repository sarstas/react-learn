import type { IRestaurant } from '../../../interface/restaurant.interface'
import { MenuList } from "../MenuList/MenuList";
import { Review } from "../Review/Review";
import { ReviewForm } from "../rewiew-form/review-form";
import './Restaurant.scss'

export const Restaurant = ({ restaurant }: { restaurant: IRestaurant }) => {
    return (
        <div className="restaurant">
            <h2>{restaurant.name}</h2>
            <MenuList menu={restaurant.menu}/>
            <Review reviews={restaurant.reviews}/>
            <ReviewForm restaurantId={restaurant.id}/>
        </div>
    );
}