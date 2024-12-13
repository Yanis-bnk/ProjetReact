export default function Produit({products}) {
    return   <tr>
    <td>{products.id}</td>
    <td>{products.title}</td>
    <td>{products.price}</td>
    <td>{products.description}</td>
    <td>{products.category}</td>
    <td>{products.image}</td>
    <td>{products.rating}</td>

  </tr>

    
}