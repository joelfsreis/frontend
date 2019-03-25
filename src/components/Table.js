import React, { Component } from 'react'
import MaterialUITable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import styled from 'styled-components'

const TableUI = styled(MaterialUITable)`
  && {
    box-shadow: ${props => props.theme.bs};
    thead th {
      font-size: 1.5rem;
      color: ${props => props.theme.accent};
      opacity: 0.9;
      background-color: white;
    }
    th {
      font-size: 1.75rem;
    }
    tbody tr {
      td { font-size: 1rem; }
      cursor: pointer;
      &:hover {
        background-color: ${props => props.theme.offWhite};
      }
    }
  }
`

const NoData = styled.div`
  margin-left: 1.5rem;
  line-height: 3rem;
  font-weight: 700;
`

export default class Table extends Component {
  renderRow = (row) => this.props.headers.map((header, index) => {
    const value = row[header.key]
    return index === 0
    ?
      <TableCell key={value} component="th" scope="row">{value || 'undefined - check your rows prop'}</TableCell>
    :

      <TableCell key={value} align="right">{value || 'undefined - check your rows prop'}</TableCell>
  })

  onClick = (e, id) => {
    e.preventDefault()
    this.props.onRowClick(id)
  }

  render() {
    const { headers, rows } = this.props

    return (
      <TableUI>
        <TableHead>
          <TableRow>
            { headers.map((header, index) => <TableCell key={header.name} align={index === 0 ? 'inherit' : 'right'}>{header.name}</TableCell>) }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rows && Array.isArray(rows)
            ?
              rows.length === 0
              ?
                <TableRow><NoData>No data available!</NoData></TableRow>
              :
                rows.map(row => <TableRow key={row.id} onClick={(e) => this.onClick(e, row.id)}>{ this.renderRow(row) }</TableRow>)
            :
              null
          }
        </TableBody>
      </TableUI>
    )
  }
}
