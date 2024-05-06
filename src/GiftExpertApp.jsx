import { useState } from 'react';
import { AddCategory, GifGrid } from './componets';

export const GiftExpertApp = () => {
  
    const [categories, setCategories] = useState(['Attack On Titan']);
  
    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    return (
    <>
        <h1>GiftExpertApp</h1>

        <AddCategory
            onNewCategory={onAddCategory}    
        />
        
        {categories.map((category) => (
            <GifGrid key={category} category={category}/>
        ))}
    </>
  )
}
