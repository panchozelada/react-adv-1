import { useShoppingCart } from '../../hooks/useShoppingCart';
import {  ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { products } from '../data/products';
import { Product } from '../interfaces/interfaces';
import '../styles/custom-styles.css';






export const ShoppingPage = () => {

    const productList: Product[]  = products;

    const { shoppingCart , onProductCountChange } = useShoppingCart();

    

    return (
        <div >
            <h1>Shopping store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }} >
                {/* <ProductCard product={product}> 
                    <ProductCard.Image />
                    <ProductCard.Title title={''}  />
                    <ProductCard.Buttons counter={0} increaseBy={function (value: number): void {
                        throw new Error('Function not implemented.');
                    } } />
                </ProductCard> */}

                {/* <ProductCard product={product1} className="bg-dark text-white"> 
                    <ProductCard.Image className='custom-image'/>
                    <ProductCard.Title className='text-bold' title={' Hola Mundo '}  />
                    <ProductCard.Buttons className='custom-buttons' />
                </ProductCard> */}

                {
                    productList.map( product => (
                        <ProductCard 
                            key={product.id}
                            product={product}
                            className="bg-dark text-white"
                            // onChange={ (  evento ) => onProductCountChange( evento ) }
                            value={shoppingCart[product.id]?.count || 0}
                            onChange={ onProductCountChange }
                        > 
                            <ProductImage className="custom-image"/>
                            <ProductTitle  className="text-white text-bold" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))

                }

                

                

                

            </div>
            
            <div className='shopping-cart'>

                {
                   
                   Object.entries( shoppingCart ).map(([ key, product ]) => (

                    <ProductCard 
                            product={product}
                            className="bg-dark text-white"
                            style={{ width: '100px'}}
                            key={ key }
                            value={ product.count }
                            onChange={ onProductCountChange }
                        >   
                            <ProductImage className="custom-image"/>
                            {/* <ProductTitle  className="text-white text-bold" /> */}
                            <ProductButtons 
                                className="custom-buttons" 
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}    
                            />
                        </ProductCard>

                   ))

                }

                        
            </div>

            <div>
                <code>
                    {
                        JSON.stringify(shoppingCart, null, 5)
                    }
                </code>
            </div>

        </div>
    )
}
