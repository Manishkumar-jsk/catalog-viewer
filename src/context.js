import React, {Component} from "react";
import {Image,ImageData} from "../src/Data/data";

const ImageContext = React.createContext();

class ImageProvider extends Component {
    state = {
        products:[],
        ImageData : ImageData
    };

    componentDidMount(){
        return this.setProducts()
    }

    setProducts = () => {
        let tempProducts = [];
        Image.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
        });
        this.setState(() => {
            return {products:tempProducts}
        })
    };

    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    };

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {ImageData:product}
        })
    };

    render () {
        return (
            <ImageContext.Provider value={{
                ...this.state,
                handleDetail : this.handleDetail,
            }}>
                {this.props.children}
            </ImageContext.Provider>
        )
    }
}

const ImageConsumer = ImageContext.Consumer;

export {ImageProvider,ImageConsumer}