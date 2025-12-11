import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
    const { i18n } = useTranslation();
    const current = i18n.language;

    const handleLanguageChange = (lang: string) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('language', lang);
    };

    return (
        <div className="relative flex items-center w-[90px] bg-gray-200 rounded-full p-1 shadow-inner">
            {/* Animated background slider */}
            <div
                className={`absolute top-1 bottom-1 w-[40px] rounded-full bg-white shadow transition-all duration-300 ease-out
          ${current === "en" ? "left-1" : "left-[46px]"}`}
            ></div>

            {/* EN */}
            <button
                onClick={() => handleLanguageChange("en")}
                className={`z-10 flex-1 text-xs font-bold transition-colors ${current === "en"
                        ? "text-gray-900"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
            >
                EN
            </button>

            {/* AZ */}
            <button
                onClick={() => handleLanguageChange("az")}
                className={`z-10 flex-1 text-xs font-bold transition-colors ${current === "az"
                        ? "text-gray-900"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
            >
                AZ
            </button>
        </div>
    );
};

export default LanguageToggle;