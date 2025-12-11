import AboutUsBanner from '../../Sections/AboutUsSections/AboutBanner'
import DeliveryBanner from '../../Sections/ContactSections/DeliveryChallange'
import AboutOurFood from '../../Sections/AboutUsSections/AboutOurFood'
import HamburgerDayBanner from '../../Sections/HomeSections/HamburgerDay'
import TwoBurgerCards from '../../Sections/AboutUsSections/TwoBurgerCards'
import Chefs from '../../Sections/AboutUsSections/Chefs'
import HowWeServeSection from '../../Sections/AboutUsSections/HowServe'
import ReservationCard from '../../Sections/AboutUsSections/ReservationCard'
import BurgersRow from '../../Sections/HomeSections/BurgersRow'

const AboutUsPage = () => {
    return (
        <div>
            <AboutUsBanner />
            <AboutOurFood />
            <DeliveryBanner />
            <TwoBurgerCards />
            <HamburgerDayBanner />
            <Chefs />
            <HowWeServeSection />
            <ReservationCard />
            <BurgersRow />
        </div>
    )
}

export default AboutUsPage