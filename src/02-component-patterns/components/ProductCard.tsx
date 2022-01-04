import styles from '../styles/styles.module.css'
import { createContext, CSSProperties, ReactElement, useContext, useState } from 'react';
import { useProduct } from '../../hooks/useProduct';
import { ProductContextProp,  Product } from '../interfaces/interfaces';




export const ProductContext = createContext({} as ProductContextProp);
const { Provider } = ProductContext;

// interface ProductButtonsProps{
//     counter : number;
//     increaseBy : (value: number) => void;
// }

export interface Props {
    children?: ReactElement | ReactElement[];
    className?: string;
    product: Product;
    style?: CSSProperties;

}

export const ProductCard = ({ children, product, className, style }: Props) => {


    const { counter, increaseBy } =  useProduct();

    return (
        <Provider value={{
            counter, 
            increaseBy,
            product
        }}>
            <div className={ ` ${styles.productCard} ${ className }`  }
                 style = { style }
            >
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