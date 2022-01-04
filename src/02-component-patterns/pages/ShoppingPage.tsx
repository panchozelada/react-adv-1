import {  ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';


const product = {
    id: '1',
    title: 'Coffe Mug - Card',
    img: './coffee-mug.png',
}


export const ShoppingPage = () => {
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

                <ProductCard product={product} className="bg-dark text-white"> 
                    <ProductCard.Image className='custom-image'/>
                    <ProductCard.Title className='text-bold' title={' Hola Mundo '}  />
                    <ProductCard.Buttons className='custom-buttons' />
                </ProductCard>

                <ProductCard 
                    product={product}
                    className="bg-dark text-white"
                > 
                    <ProductImage className="custom-image"/>
                    <ProductTitle  className="text-white text-bold" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                <ProductCard 
                    product={product}
                    style={{
                        backgroundColor: '#70D1F8'
                    }}
                > 
                    <ProductImage  style={{
                        boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                    }} />
                    <ProductTitle  style={{
                        fontWeight: 'bold'
                    }} />
                    <ProductButtons
                        style={{
                            display: 'flex',
                            justifyContent: 'end'
                        }}    
                    />
                </ProductCard>

            </div>
            
        </div>
    )
}
