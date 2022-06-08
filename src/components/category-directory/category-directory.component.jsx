import CategoryItem from '../category-item/category-item.component'

import './category-directory.styles.scss'

const CategoryDirectory = ({ category }) => (
  <div className='categories-container'>
    {category.map(({ id, title, imageUrl }) => (
      <CategoryItem category={ {id, title, imageUrl} } />
      ))}
  </div>
)
  
export default CategoryDirectory;