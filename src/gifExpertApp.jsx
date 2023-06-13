import { useState } from "react"
import { AddCategory } from "./components"
import { GifGrid } from "./components"


export const GifExpertApp = () => {

    const [Categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {
        if( Categories.includes(newCategory)){
            alert("Already exist a category with this name.")
        } else{
            setCategories([newCategory, ...Categories]);
        }

    }

    return (
        <>

            <h1 className="titleApp">GifExpertApp</h1>

            <AddCategory 
                onNewCategory={(event) => onAddCategory(event)}
            />

            {
                Categories.map( (category) => (<GifGrid category={category} key={category}/>))
            }
          


        </>
    )
}