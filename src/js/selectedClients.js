import clients from './clients'

const selectedClients = [
    'azimut-yachts',
    'gianvito-rossi',
    'moncler',
    'wellness-holding',
    'the-world-bank',
    'cucchiaio-d-argento',
    'domus',
    'everseen',
    'mtv',
    'discovery',
    'paramount-channel',
    'comedy-central',
    'sky',
    'eni-plenitude',
]

export default clients.filter((client) => {
    return selectedClients.includes(client.slug)
})