import styled from "styled-components"
import { popularProducts } from "./data"
import Product from "./Product"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`


type ProdProps = {
    cat: string,
    filters: {},
    sort : string
    
    
}
const Products = ({cat,filters,sort} : ProdProps) => {
    console.log(cat,filters,sort)
    return (
        <Container>
            {
                popularProducts.map((item) => (
                    <Product item = {item} key={item.id} />
                ))
            }
        </Container>
    )
}

export default Products