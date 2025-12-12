import DeliveryBanner from "../../Sections/ContactSections/DeliveryChallange"
import Products from "../../Sections/ShopSections/Products"
import ShopBanner from "../../Sections/ShopSections/ShopBanner"
const ShopPage = () => {
    return (
        <div>
            <ShopBanner />
            <Products />
            <DeliveryBanner />
        </div>
    )
}

export default ShopPage