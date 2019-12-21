import {
  hotels
} from '../../../db/db'

export const getHotels = (req, res) => {
  const qs = req.query
  const hotelsResult = hotels.filter(hotel => Object.keys(qs).every(key => 
    key === 'stars' ? 
      qs[key].includes(hotel[key].toString()) :
      hotel[key].toString().toLowerCase().includes(qs[key].toLowerCase())))
  res.send(hotelsResult)
}