import ProjectLayout from "./Layout";
import ElectronicProduct from './Electronics';
import JewelleryProduct from './Jewellery';
import MensClothProduct from './MensCloth';
import WomensClothProduct from './WomensCloth';
import ProductCategories from './Categories';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import React from "react";
import ProductDetails from "./ProductDetails"
import ListOfProducts from "./ListOfProducts";


function ProjectRouter(){

    return(
<>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<ProjectLayout />}>
          <Route index element={<ProductCategories />} />
          <Route path="electronics" element={<ElectronicProduct/>}/>
          <Route path="jewelery" element={<JewelleryProduct/>} />
          <Route path="/men's clothing" element={<MensClothProduct/>} />
          <Route path="/women's clothing" element={<WomensClothProduct/>} />
          <Route path="/ProductDetails/:id" element={<ProductDetails/>} />
          <Route path="/products" element={<ListOfProducts/>} />
        </Route>
      </Routes>
    </BrowserRouter>

</>
    );
} export default ProjectRouter;