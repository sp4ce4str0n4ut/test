import Card from './Card';
import { connect } from 'react-redux';
import { fetchFiltersData }  from '../../store/filters';
import { fetchCardsData } from '../../store/cards';
import { filterCards } from '../../store/filter'

const mapStateToProps = (state) => ({
  filters: state.filters.filters,
  cards: state.cards.cards,
  filtered: state.filter.filtered,
});

const mapDispatchToProps = {
    fetchFiltersData,
    fetchCardsData,
    filterCards,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
