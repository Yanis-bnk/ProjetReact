import { useEffect, useState } from "react";
import Produit from "./Produit";

export default function ProduitList() {


   const AfficherProduit=()=>{
     return produitlist.map((products,key)=>{
        return <Produit produit={products} key={key}/>

     })
   }
    const [produitlist,setproduitlist]=useState([])
  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json()) 
      .then(data => setproduitlist(data)) 
      .catch(error => console.error("Erreur lors de la récupération :", error)); 
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container-fluix mx-auto w-75 my-3">
      <h1>Liste de produit</h1>
      <table className="table">
        <thead>
          <tr>
            <th>#ID</th>
            <th>Titre</th>
            <th>Prix</th>
            <th>Description</th>
            <th>Categorie</th>
            <th>Image</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
        {AfficherProduit()}
        </tbody>
      </table>
    </div>
  );
}
