import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { ToggleButton } from 'primereact/togglebutton';
import { useAtom } from "jotai";
import { favoritesAtom } from "../App";
import { Skeleton } from "primereact/skeleton";

export function itemTemplate(product) {
    
   const [favorites, setFavourites] = useAtom(favoritesAtom);
   const checked = favorites.includes(product);
    
   function toggleFavorite(product){
    if (favorites.some(p => p.id == product.id)) {
        result = favorites.filter(f=> f != product);
    } else {
        setFavourites(result);
        localStorage.setItem("favorites", JSON.stringify(result))
    }

   }
   
    const navigator = useNavigate();
     
    return (
       <>
       <div className="productItem" onClick={() => navigator("/recipe?id=" +product.id)}>
        {product.image 
        ? <img src={product.image} alt={product.title} /> :
         <Skeleton height="8.6rem"/>}
        
        {product.spoonacularScore ? <Rating 
        cancel={false}
            value={Math.round(product.spoonacularScore / 10)} 
            readOnly={false}/>       : 
            <Skeleton className="rating-skeleton" height="1rem" borderRadius="1rem"  />}
                         
       <div style={{ display:"flex", justifyCotent: "space-between", alignItems:"center"}}> 
       
        <Tag
            severity={product.vegetarian ? 'success' : 'warning'} 
            value={product.vegeterian ? "vegeterian" : "Non-vegeterian"}  />
        <ToggleButton 
            onClick={(e) => { e.stopPropagation(); toggleFavorite(product)}}
            onLabel=""
            offLabel=""
            onIcon="pi pi-heart-fill"
            offIcon="pi pi-heart"
            checked={checked}
        />
    </div>
    <p>{product.title}</p>

</div>
</>
)
}
