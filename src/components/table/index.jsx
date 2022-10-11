// Lib
import React from 'react';
import PropTypes from 'prop-types'

// Components
import TableHeader from './table-header'
import TableRow from './table-row'

// Styles
import * as SC from './styled'

const Table = ({ data, columns }) => {
  
  return (
    <SC.TableWrapper className="table table-bordered  table-hover">
    <thead>
      <TableHeader columns={columns} />
    </thead>
    <tbody>
      <TableRow data={data} columns={columns} />
    </tbody>
  </SC.TableWrapper>
  )
}

Table.propTypes  = {
  data:PropTypes.arrayOf(
    PropTypes.object
  ),
  columns: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    render:PropTypes.func
  })).isRequired,
}


export default Table;