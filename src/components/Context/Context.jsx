import axios from 'axios'
import React, { useState, createContext, useEffect } from 'react'
import qs from 'qs'

export const SiteContext = createContext({})

const createAuctionUrl = 'https://auction-website89.herokuapp.com/bids'

const fetchAPI = async () => {
  try {
    const res = await axios.get('https://auction-website89.herokuapp.com/main')
    return res.data
  } catch (error) {
    console.log(error)
    return null
  }
}

const fetchBidAPI = async (id) => {
  try {
    const res = await axios.get(
      `https://auction-website89.herokuapp.com/bids/${id}`
    )
    return res.data
  } catch (error) {
    console.log(error)
    return null
  }
}

const createAuction = async (postData) => {
  try {
    console.log(qs.stringify(postData))
    const res = await axios.post(createAuctionUrl, qs.stringify(postData), {
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    })
    console.log(res)
    return res.data
  } catch (error) {
    console.log(error)
    return null
  }
}

export const SiteContextProvider = ({ children }) => {
  const [promotedCars, setPromotedCars] = useState([])
  const [soldCars, setSoldCars] = useState([])
  const [currentCars, setCurrentCars] = useState([])
  const [allCars, setAllCars] = useState([])
  const [bid, setBid] = useState({})
  const [brands, setBrands] = useState([])

  useEffect(() => {
    const getCars = async () => {
      const cars = await fetchAPI()

      setAllCars(cars)
      setPromotedCars(cars.filter((car) => car.promoted === true))
      setSoldCars(cars.filter((car) => car.sold === true))
      setCurrentCars(cars.filter((car) => !car.sold && !car.promoted))
      setBrands([...new Set(cars.map((car) => car?.brand))])
    }

    getCars().catch(console.error)
  }, [])

  const createAuctionPost = async (postData) => {
    await createAuction(postData)
  }

  const getBidData = async (id) => {
    await fetchBidAPI(id).then((res) => setBid(res))
  }

  return (
    <SiteContext.Provider
      value={{
        allCars,
        promotedCars,
        soldCars,
        currentCars,
        brands,
        getBidData,
        createAuctionPost,
        bid,
      }}
    >
      {children}
    </SiteContext.Provider>
  )
}
