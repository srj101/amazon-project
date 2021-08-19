import React from 'react'
import './home.css'
import Product from './Product'
function home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img
                className='home__image'
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

                <div className="home__row">
                    {/** Product */}
                    <Product id={1} title='Javascript by Junayed Ahmed' price={39.99} image='https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/e53af8191_202772.jpg' rating={5}/>
                    {/** Product */}
                    <Product id={1}  title='Javascript by Junayed Ahmed' price={39.99} image='https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/e53af8191_202772.jpg' rating={5}/>
                </div>

                <div className="home__row">
                    {/** Product */}
                    <Product id={1} title='Javascript by Junayed Ahmed' price={39.99} image='https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/e53af8191_202772.jpg' rating={5}/>
                    {/** Product */}
                    <Product id={1} title='Javascript by Junayed Ahmed' price={39.99} image='https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/e53af8191_202772.jpg' rating={5}/>
                    {/** Product */}
                    <Product id={1} title='Javascript by Junayed Ahmed' price={39.99} image='https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/e53af8191_202772.jpg' rating={5}/>
                </div>

                <div className="home__row">
                    {/** Product */}
                    <Product id={1} title='Javascript by Junayed Ahmed' price={39.99} image='https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/e53af8191_202772.jpg' rating={5}/>
                </div>

            </div>

           

        </div>
    )
}

export default home
