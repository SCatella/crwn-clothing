import CategoryItem from '../category-item/category-item.component'

import './category-items.styles.scss'

const CategoryItems = ({ category }) => (
  <div className='categories-container'>
    {category.map(({ id, title, imageUrl }) => (
      <CategoryItem category={ {id, title, imageUrl} } />
      ))}
  </div>
)
  
export default CategoryItems;