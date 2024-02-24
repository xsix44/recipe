import './App.css'
import Favorite from './pages/Favorite'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
import './assets/navbar.css'
import './assets/dataview.css'
import './assets/similarRecipes.css'
import { NotFound } from './pages/NotFound';
import './App.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { Recipe } from './pages/Reciepe';
import 'primeicons/primeicons.css';
import { atom } from 'jotai';
import { AboutUs } from './pages/aboutus';
import { Layout } from './pages/Layout';

export const favoritesAtom = atom(JSON.parse(localStorage.getItem("favourites") ?? "[]"));

export default function App() {
  return (
    <>
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/favorite" element={<Favorite/>}/>
        <Route path="recipe" element={<Recipe />}></Route>
        <Route path="about" element={<AboutUs/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
    </>
  )
}
