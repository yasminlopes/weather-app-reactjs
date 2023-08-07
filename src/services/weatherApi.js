const URL = process.env.REACT_APP_WEATHER_API_URL;
const TOKEN = process.env.REACT_APP_WEATHER_API_SECRET_KEY;

const buscarCidade = async (cidade) => {
  const apiUrl = `${URL}/current.json?key=${TOKEN}&q=${cidade}&aqi=no`

 const resposta = await fetch(apiUrl)
 const dados = resposta.json()
 return dados;
}

export default buscarCidade