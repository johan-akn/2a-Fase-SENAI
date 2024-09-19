import React from 'react'

function RelatorioAltura(props) {
  return (
    <div>
      <p>Relatório dos dados obtidos:</p>
      <p>Maior altura: {props.infos.maior}</p>
      <p>Menor altura: {props.infos.menor}</p>
      <p>Média de altura das mulheres: {props.infos.mediaFem}</p>
      <p>Média de altura da população: {props.infos.mediaPop}</p>
      {/* <p>Percentual de homens na população: {props.infos.infoMasc}</p> */}
    </div>
  )
}

export default RelatorioAltura
