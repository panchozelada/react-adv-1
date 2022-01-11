import styles from '../styles/styles.module.css'
import { createContext, CSSProperties, ReactElement, useContext, useState } from 'react';
import { useProduct } from '../../hooks/useProduct';
import { ProductContextProp, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';




export const ProductContext = createContext({} as ProductContextProp);
const { Provider } = ProductContext;

// interface ProductButtonsProps{
//     counter : number;
//     increaseBy : (value: number) => void;
// }

export interface Props {
    // children?: ReactElement | ReactElement[];
    children: ( args: ProductCardHandlers) => JSX.Element,
    className?: string;
    product: Product;
    style?: CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues

}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {


    const { counter, increaseBy, maxCount , isMaxCountReached, reset } =
      useProduct( { onChange, product, value, initialValues } );

    return (
        <Provider value={{
            counter, 
            increaseBy,
            maxCount,
            product
        }}>
            <div className={ ` ${styles.productCard} ${ className }`  }
                 style = { style }
            >
                { 
                children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    increaseBy,
                    reset 
                }) }

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