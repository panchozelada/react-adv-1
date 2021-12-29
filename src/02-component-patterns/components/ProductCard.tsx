import styles from '../styles/styles.module.css'
import { createContext, ReactElement, useContext, useState } from 'react';
import { useProduct } from '../../hooks/useProduct';
import { ProductContextProp, ProductCardProps } from '../interfaces/interfaces';




export const ProductContext = createContext({} as ProductContextProp);
const { Provider } = ProductContext;

// interface ProductButtonsProps{
//     counter : number;
//     increaseBy : (value: number) => void;
// }



export const ProductCard = ({ children, product }: ProductCardProps) => {


    const { counter, increaseBy } =  useProduct();

    return (
        <Provider value={{
            counter, 
            increaseBy,
            product
        }}>
            <div className={ styles.productCard }>
                { children }

                {/* <ProductImage img= { product.img } />            

                <ProductTitle title= { product.title } />

                <ProductButtons counter={ counter } increaseBy={ increaseBy } /> */}

            </div>
        </Provider>
    )
}


// ProductCard.Title   = ProductTitle;
// ProductCard.Image   = ProductImage;
// ProductCard.Buttons = ProductButtons;