import ReservationSection from "../../Sections/AboutUsSections/ReservationCard"
import ChefBanner from "../../Sections/ChefSections/ChefBanner"
import ChefsFull from "../../Sections/ChefSections/ChefsFull"
import FeaturesSection from "../../Sections/HomeSections/FeaturesSection"
import FoodMenuCards from "../../Sections/HomeSections/FoodMenuCards"
import BurgersRow from "../../Sections/HomeSections/BurgersRow"
import ChefsReview from "../../Sections/ChefSections/ChefsReview"

const ChefPage = () => {
    return (
        <div>
            <ChefBanner />
            <ChefsFull />
            <FeaturesSection />
            <ReservationSection />
            <FoodMenuCards />
            <ChefsReview />
            <BurgersRow />
        </div>
    )
}

export default ChefPage