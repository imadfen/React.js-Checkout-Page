export interface productType {
    id: number,
    name: string,
    price: number,
    newPrice?: number,
    image: string,
    quantity: number,
    shippingPrice: number
}

interface propsType {
    product: productType,
    changeQuantity: (oper: "add" | "sub") => void,
}

function Product({ product, changeQuantity }: propsType) {

    const DisplayPrice = () => {
        if (product.newPrice) {
            return (
                <div className="flex gap-4 items-center">
                    <p className="text-[#f2994a]">${product.newPrice}</p>
                    <p className="line-through text-xs">${product.price}</p>
                </div>
            )
        }

        return <p className="text-[#f2994a]">${product.price}</p>
    }

    return (
        <div className="flex gap-6 text-[#4e5150]">
            <img src={product.image} alt="" width={134.21} height={136.27} className="rounded-2xl" />
            <div className="flex flex-col">
                <p>{product.name}</p>
                <DisplayPrice />

                <div className="mt-auto w-[134px] p-3 flex justify-center items-center rounded-xl border border-[#828282]">
                    <p className="w-7 rounded aspect-square bg-gray-300 text-lg text-center text-[#828282] select-none cursor-pointer hover:bg-gray-400 active:scale-95 transition-all duration-200" onClick={() => changeQuantity("sub")}>-</p>
                    <p className="flex-grow text-center">{product.quantity}</p>
                    <p className="w-7 rounded aspect-square bg-gray-300 text-lg text-center text-[#828282] select-none cursor-pointer hover:bg-gray-400 active:scale-95 transition-all duration-200" onClick={() => changeQuantity("add")}>+</p>
                </div>
            </div>
        </div>
    )
}

export default Product