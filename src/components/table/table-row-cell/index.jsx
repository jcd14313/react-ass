// Lib
import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types';

// Styles
import * as SC from './styled'

const TableRowCell = ({ item, column }) => {
const value = _.get(item, column.key);
	return (
    <SC.TableCell>{column.render ? column.render(column, item) : value}</SC.TableCell>
	)
}

TableRowCell.propTypes = {
  item: PropTypes.object,
  column: PropTypes.shape({
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    width: PropTypes.string,
    render:PropTypes.func
  }).isRequired,
}
export default TableRowCell