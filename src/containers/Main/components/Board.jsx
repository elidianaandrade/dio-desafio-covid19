import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data

  const getValue = (value) => value ? value.toLocaleString('pt-BR') : <Skeleton variant="text" width={120} height={60} />

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#BF1304" />
      </Grid>
      <Grid item xs={12} sm={6} md={8}>
        <Card value={getValue(todayCases)} label="Casos hoje" color="#0A86FA" />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card value={getValue(deaths)} label="Total de óbitos" color="#730202" />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card value={getValue(cases)} label="Total de casos" color="#086BC7" />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card value={getValue(recovered)} label="Total de recuperados" color="#41CAD9" />
      </Grid>
    </Grid>
  )
}

export default memo(Board)