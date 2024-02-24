 import {DataView} from "primereact/dataview"
 
 export function RecipeTime(props) {
       
        const products = [
            {key: "Preparation time", value: props.recipe.preparationMinutes}
        ]

            const itemtemplate = (product) => {
                <div className="production">
                    <p>{product.key}</p>
                    <p>{product.value}</p>
                </div>
            }
        
        
        return (
        <>
        <DataView  value={products} itemTemplate={itemtemplate} layout="grid"/>
        </>)
    
}