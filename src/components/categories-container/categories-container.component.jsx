import CategoryContainer from '../category-container/category-container.component'

import './categories-container.styles.scss'

const CategoriesContainer = ({ category }) => (
  <div className='categories-container'>
    {category.map(({ id, title, imageUrl }) => (
      <CategoryContainer category={ {id, title, imageUrl} } />
      ))}
  </div>
)
  
export default CategoriesContainer;