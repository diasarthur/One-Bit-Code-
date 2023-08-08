const dayjs = require('dayjs');
import './styles/index.css'

const whatsName = prompt('Qual é seu nome?')
alert(`Olá ${whatsName}, hoje é dia: ${dayjs().format('DD/MM/YYYY')}.`)