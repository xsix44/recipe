import { ReciepeDisplay } from '../components/RecipeDisplay.jsx';
import './../App.css'
import {products} from './products.js'; 

export default function Home() {
    return(
        <>
        <ReciepeDisplay recipes={products.recipes} />
        </>
    )

// const [products, setProducts] = useState([]);
// useEffect(() => {
//   axios.get("https://api.spoonacular.com/recipes/random?number=4&apiKey=5384da7c15dc4a60afcdbb2f492e9a0f")
//   .then((res) => setProducts(res.data));
// },[])
}

