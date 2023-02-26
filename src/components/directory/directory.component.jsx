import CategoryItem from '../category-item/category-item';
import './directory.style.scss';

const Directory = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map((cate) => {
        return <CategoryItem cate={cate} key={cate.id} />;
      })}
    </div>
  );
};

export default Directory;
