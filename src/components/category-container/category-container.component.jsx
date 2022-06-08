import './category-container.styles.scss'

const CategoryContainer = ({ category: { id, title } }) => (
  <div className='category-container' key={id}>
    {/*<img className='category-image' />*/}
    <div className='category-body'>
      <h2>{`${title}`}</h2>
      <p>Shop Now</p>
    </div>
  </div>
);

export default CategoryContainer;