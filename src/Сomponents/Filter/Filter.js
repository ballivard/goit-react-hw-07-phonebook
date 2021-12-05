import PropTypes from 'prop-types';
import shortid from 'shortid';
import styles from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/contacts/actions';

const Filter = () => {
  let inputFilterID = shortid();
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const handleChangeFilter = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <div className={styles.filter}>
      Find contacts by name
      <input
        className={styles.filter_input}
        id={inputFilterID}
        name={filter}
        type="text"
        value={filter}
        onChange={handleChangeFilter}
      />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  handleChangeFilter: PropTypes.func,
  filter: PropTypes.string,
};
