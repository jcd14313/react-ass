// Lib
import React from 'react'
import PropTypes from 'prop-types';

// Components
import TableRowCell from '../table-row-cell'

// Styles
import * as SC from './styled'

const TableRow = ({ data, columns }) => {
	return (
		<>
		{data.map((item, itemIndex) => (
			<SC.TableRowItem key={`table-body-${itemIndex}`}>
				{columns.map((column, columnIndex) => (
					<TableRowCell
						key={`table-row-cell-${columnIndex}`}
						item={item}
						column={column}
					/>
				))}
			</SC.TableRowItem>
		))}
	</>
	)
}

TableRow.propTypes = {
  data:PropTypes.arrayOf(
    PropTypes.object
  ),
  columns: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    width: PropTypes.string,
    render:PropTypes.func
  })).isRequired,
}

export default TableRow