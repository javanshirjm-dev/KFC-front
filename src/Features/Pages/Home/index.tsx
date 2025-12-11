import AboutSection from "../../Sections/HomeSections/AboutSection"
import ExploreProductsHome from "../../Sections/HomeSections/ExploreProductsHome"
import FoodMenuCards from "../../Sections/HomeSections/FoodMenuCards"
import HamburgerDayBanner from "../../Sections/HomeSections/HamburgerDay"
import HeroBanner from "../../Sections/HomeSections/HeroBanner"
import TestimonialSection from "../../Sections/HomeSections/TestimonialSection"
import FeaturesSection from "../../Sections/HomeSections/FeaturesSection"
import BlogSection from "../../Sections/HomeSections/BlogSection"
import BurgersRow from "../../Sections/HomeSections/BurgersRow"

const HomePage = () => {
    return (
        <div>
            <HeroBanner />
            <AboutSection />
            <FoodMenuCards />
            <ExploreProductsHome />
            <HamburgerDayBanner />
            <TestimonialSection />
            <FeaturesSection />
            <BlogSection />
            <BurgersRow />
        </div>
    )
}

export default HomePage