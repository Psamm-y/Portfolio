
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'


const Grid = () => {
  return (
    <section id='about'>
      <BentoGrid> {gridItems.map((item) => <BentoGridItem
        key={item.id}
        title={item.title} 
        id={item.id}
        description={item.description}
      className={item.className}
      />)}</BentoGrid>
   </section>
  )
}

export default Grid