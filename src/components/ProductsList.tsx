import Product, { productType } from "./Product"
import VintageBackbagImage from "../assets/photo1.png"
import LeviShoesImage from "../assets/photo2.png"
import { useState } from "react"


function ProductsList() {
    const [products, setProducts] = useState<productType[]>([
        {
            id: 1,
            name: "Vintage Backbag",
            price: 94.99,
            newPrice: 54.99,
            image: VintageBackbagImage,
            quantity: 1,
            shippingPrice: 10
        },
        {
            id: 2,
            name: "Levi Shoes",
            price: 124.99,
            newPrice: 74.99,
            image: LeviShoesImage,
            quantity: 1,
            shippingPrice: 9
        }
    ])
    const [shippingPrice, setShippingPrice] = useState(getShippingPrice(products))

    function handleChangeQuantity(id: number, oper: "add" | "sub") {
        let newList: productType[] = []
        for (let i = 0; i < products.length; i++) {
            const prod = products[i];
            if (prod.id == id && !(prod.quantity == 1 && oper == "sub")) {
                newList.push({
                    ...prod,
                    quantity: oper == "add" ? prod.quantity + 1 : prod.quantity - 1,
                })
                continue
            }
            newList.push(prod)
        }
        setProducts(newList)
        setShippingPrice(getShippingPrice(newList))
    }

    function getShippingPrice(productsList: productType[]) {
        let price = 0
        for (let i = 0; i < productsList.length; i++) {
            const prod = productsList[i];
            price += prod.quantity * prod.shippingPrice
        }

        return price
    }

    function getTotalPrice() {
        let productsPrice = 0
        for (let i = 0; i < products.length; i++) {
            const prod = products[i];
            productsPrice += prod.quantity * (prod.newPrice ? prod.newPrice : prod.price)
        }

        return productsPrice + getShippingPrice(products)
    }

    return (
        <div className="flex justify-center md:block md:order-last mb-7">
            <div className="w-[383px] min-h-[535px] bg-[#f2f2f2] rounded-xl p-7 flex flex-col">
                <div className="flex flex-col gap-10">
                    {products.map((prod, i) => <Product key={i} product={prod} changeQuantity={(oper: "add" | "sub") => handleChangeQuantity(prod.id, oper)} />)}
                </div>


                <div className="mt-auto flex flex-col gap-4">
                    <div className="flex border-t-2 pt-1 border-t-[#bdbdbd]">
                        <p className="flex-grow">Shipping</p>
                        <p>${shippingPrice}</p>
                    </div>

                    <div className="flex border-t-2 pt-1 border-t-[#bdbdbd]">
                        <p className="flex-grow">Total</p>
                        <p>${getTotalPrice().toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsList