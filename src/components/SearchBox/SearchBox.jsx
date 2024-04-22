import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
    const dispatch = useDispatch();
    
    const onAddSearchValue = (e) => {
        const value = e.target.value.trim();
        const action = setFilter(value);
        dispatch(action);
    }
    
    return (
        <div className={css.filter}>
            <span className={css.span}>Find contacts by name</span>
            <input className={css.input}
                type="text"
                // value={filter}
                onChange={onAddSearchValue}
            />
        </div>
    );
};

export default SearchBox;