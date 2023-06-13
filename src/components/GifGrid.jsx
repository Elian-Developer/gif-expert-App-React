import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/GetGifs'
import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs( category );

  
  return (
    <>
    {
      isLoading && <h2 className='loading'>Cargando...</h2>
    }
        <h3>{category}</h3>

        <div className='card-grid '>
          {
            images.map(( image ) => (
            <GifItem key={image.id}
                {...image} // Usado para mandar todas las propiedades restantes de ese objeto.
            />
            ))
          }
        </div>

        {/*  {  {
                images.map(item => {
                    return (
                        <li key={item.id}>{item.title}</li>
                    )
                })
            } 
      */}

      </>
    );
}