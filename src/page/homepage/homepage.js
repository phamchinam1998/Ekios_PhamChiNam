import React from 'react';
import 'antd/dist/antd.css';
import "../../scss/homepage.scss";
import "../../scss/button.scss";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CarouselImg from '../../component/carousel.jsx';
import LoadmoreBtn from '../../component/Loadmore.jsx';
import NewArrival from '../../component/newarrival.jsx';
import Highlight from '../../component/highlight.jsx';
import Navigation from '../../component/navigation.jsx';
import Category from '../../component/category.jsx';
import Footer from '../../component/footer.jsx';
//Reducer
import { get_highlight, get_newarrival } from '../../reducer/homepage';

export default function HomePage() {
    const highlight_data = useSelector((state) => state.Homepage.highlight_data);
    const newarrival_data = useSelector((state) => state.Homepage.newarrival_data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_highlight({
            params: {
                objectIds: "60e3ca3980ba6406a0841983,60da99f200b1370fbe8e97fb,60da967500b1370fbe8e97ef"
            }
        }));
        dispatch(get_newarrival({
            params: {
                limit: 8,
                sortField: "sellorder.createdAt",
                sortType: -1,
                sortVal: "newestSO",
                status: 2,
            }
        }));
    }, [dispatch]);
    return (
        <>
            <Navigation />
            <CarouselImg />
            <Highlight data={highlight_data} />
            <NewArrival data={newarrival_data} title="New Arrivals" />
            <NewArrival data={newarrival_data} title="Coming soon" />
            <Category />
            <LoadmoreBtn />
            <Footer />
        </>
    )
}