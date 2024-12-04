import { FaChevronRight } from "react-icons/fa";

function FeatureCard() {
    return (
        <div className="mx-auto rounded-lg shadow-lg overflow-hidden">
            <img
                src="https://via.placeholder.com/400x200" // Replace with your image URL
                alt="No Sugar Oatmeal Cookies"
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <p className="text-sm">December 10, 2017</p>
                <h3 className="text-lg font-semibold mt-2">
                    Title
                </h3>
                <p className="text-sm mt-2">
                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt
                    mollit id et sit proident dolor nulla sed commodo est ad minim elit...
                </p>
                <div className="flex justify-between items-center mt-4">
                    <p className="text-sm font-medium">Cooking, Health</p>
                    <button className="flex items-center gap-1 text-sm font-semibold hover:underline">
                        Details <FaChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FeatureCard;
