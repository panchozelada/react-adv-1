import {  ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';



const product = {
    id: '1',
    title: 'Coffe Mug - Card',
    img: './coffee-mug.png',
}


export const ShoppingPage = () => {
    return (
        <div>
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

                <ProductCard product={product}> 
                    <ProductCard.Image />
                    <ProductCard.Title title={' Hola Mundo '}  />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard product={product}> 
                    <ProductImage/>
                    <ProductTitle   />
                    <ProductButtons />
                </ProductCard>

            </div>
            
        </div>
    )
}
