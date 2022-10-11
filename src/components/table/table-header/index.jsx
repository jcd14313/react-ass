// Lib
import React from 'react'
import PropTypes from 'prop-types';

// Styles
import * as SC from './styled'

const TableHeader = ({ columns  }) => {
  
	return (
    <tr>
    {columns.map((column, columnIndex) => (
      <SC.TableHeaderCell
        key={`table-head-cell-${columnIndex}`}
        style={{ width: column.width }}
      >
        {column.title}
      </SC.TableHeaderCell>
    ))}
  </tr>
	)
}

TableHeader.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    render:PropTypes.func
  })).isRequired,
}

export default TableHeader