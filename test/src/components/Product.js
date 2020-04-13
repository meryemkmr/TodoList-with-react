import React, { Component } from 'react'

export class Product extends Component {
    constructor(props) {
        super(props)
        this.state ={
           products:[],
           searchResults:''
        }
        
    }
    

    componentDidMount = (params) => {
        let api = "https://api.scalablepress.com/v2/categories/sweatshirts"
        fetch(api)
        .then(res =>{
            return res.json()
        })
        .then(data=>{
            this.setState({
                products:data.products
            })
        })
        
    }
    handleChange = (e) => {
        this.setState({
            searchResults: e.target.value
        })
    }
    
    render() {

        
        let articleList = this.state.products.map((product, index) => {
            console.log(product)

            return <li key ={index}>
                <h4>{product.name}</h4>
                <br />
                {product.image ? <img src={product.image.url} height="150px" /> : null}
                <br />
                {product.image ? <p>{product.image.label}</p> : null}
                
                
                
                <p> categoryId :{product.id}</p>
                {<p>{product.style}</p> }
            </li>
        })
        
        return (
            <>
            
            <ul>
                {articleList}
            </ul>
        </>
        )
    }
}

export default Product
