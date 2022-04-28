import React, { memo } from 'react'
import { Card, Typography, Button, Select, MenuItem } from '../../../components'
import COUNTRIES from '../../../commons/constants/countries'
import { CardPanelContentStyled, ItemStyled } from './style'

const navigatorHasShare = navigator.share

export default memo(Panel)

function Panel({ updateAt, onChange, data, country, getCoviddata }) {
  const { recovered } = data

  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={`País-${country.label}`} />
      </ItemStyled>
    </MenuItem>
  )

  const textCovid19 = `País: ${country} - recuperados: ${recovered}`

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19)
  }

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${country}`,
      text: textCovid19,
      url: 'https://dio-desafio-covid19.netlify.app/'
    })
  }

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  )

  const renderCopyButton = (
    <div>
      <Button variant="contained" color="primary" onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  )


  return (
    <Card variant="outlined" style={{borderColor: "white"}}>
      <CardPanelContentStyled>
        <div>
          <div class="title-container">
            <Typography variant="h3" component="span" color="inherit">DASHBOARD COVID-19</Typography>
            {navigatorHasShare ? renderShareButton : renderCopyButton} 
          </div>
          <div className="text-container">
              <Typography variant="h5" component="span" color="inherit">Painel de Casos do Coronavírus</Typography>
              <Typography variant="body2" component="span" color="inherit">Última atualização: {updateAt}</Typography>
          </div>
          <div className="pt-2">
              <Select onChange={onChange} value={country}>
                {COUNTRIES.map(renderCountries)}
              </Select>
          </div>
        </div>
      </CardPanelContentStyled>
    </Card>
  )
}

