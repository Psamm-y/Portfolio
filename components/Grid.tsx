
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'


const Grid = () => {
  return (
    <section id='about'>
      <BentoGrid> {gridItems.map(({id,title,description,className,imgClassName,img,spareImg,titleClassName}) => <BentoGridItem
        key={id}
        title={title} 
        id={id}
        description={description}
        className={className}
        img={img}
        imgClassName={imgClassName}
        spareImg={spareImg}
        titleClassName={titleClassName}
      />)}</BentoGrid>
   </section>
  )
}

export default Grid