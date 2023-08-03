import FormSection from "./components/FormSection"
import ProductsList from "./components/ProductsList"

function App() {
    return (
        <div className="py-4 px-2 md:px-32 overflow-x-hidden">
            <p className="text-4xl">Checkout</p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-32">
                <ProductsList />
                <FormSection />
            </div>

            <p className="text-sm text-[#bdbdbd] text-center mt-20">created by <a href="https://github.com/imadfen">imadfen</a> - devChallenges.io</p>
        </div>
    )
}

export default App
