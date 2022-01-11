import {  ProductButtons,  ProductImage, ProductTitle } from '../components';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { Product } from '../interfaces/interfaces';
import '../styles/custom-styles.css';

const product = products[0];




export const ShoppingPage = () => {

    const productList: Product[]  = products;


    return (
        <div >
            <h1>Shopping store</h1>
            <hr />
            
                        <ProductCard 
                            key={product.id}
                            product={product}
                            className="bg-dark text-white"
                            initialValues={{
                                count: 4,
                                maxCount: 10
                            }}
                        > 
                        {
                            (  {reset, isMaxCountReached, count, increaseBy, maxCount}  ) => (
                                <>
                                    <ProductImage className="custom-image"/>
                                    <ProductTitle  className="text-white text-bold" />
                                    <ProductButtons className="custom-buttons" />
                                    <button onClick={reset} >Reset</button>
                                    <button onClick={()=> increaseBy(-2)}> 
                                        -2 
                                    </button>
                                    { !isMaxCountReached && 
                                     <button onClick={()=> increaseBy(2)}> 
                                         +2 
                                     </button>
                                    } 
                                    <span> {count} - {maxCount} </span>
                                
                                </>

                               
                            )

                        }
                            
                        </ProductCard>

        </div>
    )
}
