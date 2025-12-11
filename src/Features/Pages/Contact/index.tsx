import ContactHeroBanner from '../../Sections/ContactSections/ContactHeroBanner'
import InfoCards from '../../Sections/ContactSections/InfoCards'
import ContactFormSection from '../../Sections/ContactSections/FormSection'
import DeliveryBanner from '../../Sections/ContactSections/DeliveryChallange'

const ContactPage = () => {
    return (
        <>
            <ContactHeroBanner />
            <InfoCards />
            <ContactFormSection />
            <DeliveryBanner />
        </>
    )
}

export default ContactPage