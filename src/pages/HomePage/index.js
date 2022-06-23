import HomePage from './HomePage';
import { connect } from 'react-redux';
import { fetchFiltersData }  from '../../store/filters';
import { fetchCardsData } from '../../store/cards'; 

const mapStateToProps = (state) => ({
  filters: state.filters.filters,
  cards: state.cards.cards,
  page: state.cards.page,
});

const mapDispatchToProps = {
    fetchFiltersData,
    fetchCardsData,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
