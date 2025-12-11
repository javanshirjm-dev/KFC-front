import Products from "../../Sections/ShopSections/Products"
import ShopBanner from "../../Sections/ShopSections/ShopBanner"
import ShopFilters from "../../Sections/ShopSections/ShopFilters"
const ShopPage = () => {
    return (
        <div>
            <ShopBanner />
            <ShopFilters />
            <Products />
        </div>
    )
}

export default ShopPage