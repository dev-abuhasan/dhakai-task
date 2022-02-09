import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from '../../../../services/redux/products/productActions';
import Loading from '../../../Parent/Loadings/Loading';
import './Products.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
const Products = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [limit] = useState(8);
    const [skip, setSkip] = useState(0);
    const [newProducts, setNewProducts] = useState([])

    const dispatch = useDispatch();

    const { products, loading, } = useSelector(
        state => state.productList
    );

    useEffect(() => {
        if (products) {
            setNewProducts(prev => [...prev, products])
        }
    }, [products]);

    useEffect(() => {
        dispatch(getProductList(skip, limit));
    }, [dispatch, limit, skip]);

    return (
        <div id='main_product_all' className='container-fluid'>
            {loading && <Loading />}
            <InfiniteScroll
                onScroll={() => setSkip(8)}
                dataLength={15}
                next={() => setCurrentPage(currentPage + 1)}
                hasMore={newProducts.length}
            >
                <div className='row w-100 px-2'>
                    {newProducts?.map(data => {
                        return data.map((d, index) =>
                            <div key={index} className="col-xl-3 col-lg-4 col-lg-6 px-2 pb-4">
                                <div className='custom_card h-100'>
                                    <div className='banner_parent'>
                                        {d.meta.banners.map((img, index) => <img key={index} src={img.url} alt={img.name} className="w-50 p-1" />)}
                                        <div className='logo'>
                                            <img src={d.meta.logo.url} alt={d.meta.logo.url} />
                                        </div>
                                    </div>
                                    <div className='custom_card_details px-3'>
                                        <h3 className='title'>{d.meta.companyName}</h3>
                                        <div className='address_quantity d-flex'>
                                            <span className='address'>
                                                {
                                                    d.addresses[0] ?
                                                        `${d.addresses[0]?.state}, ${d.addresses[0]?.country}`
                                                        : "address not found"}
                                            </span>
                                            <b> &nbsp; &middot; &nbsp;</b>
                                            <span className='quantity'>Min Qty: {d.minOrderQty}</span>
                                        </div>
                                        <div className='product_group'>
                                            <span>Hoodies, Trousers, Jackets, Hoodies ..</span>
                                        </div>
                                    </div>
                                    <button className='view_details btn my-4 mx-3'>View Details</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </InfiniteScroll >
        </div >
    );
};

export default Products;