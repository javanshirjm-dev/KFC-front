import ReservationBanner from '../../Sections/ReservationSections/ReservationBanner'
import ReservationSection from '../../Sections/AboutUsSections/ReservationCard'
import ChefsReview from '../../Sections/ChefSections/ChefsReview'
import DeliveryChallange from '../../Sections/ContactSections/DeliveryChallange'


const ReservationPage = () => {
    return (
        <div>
            <ReservationBanner />
            <ReservationSection />
            <ChefsReview />
            <DeliveryChallange />
        </div>
    )
}

export default ReservationPage