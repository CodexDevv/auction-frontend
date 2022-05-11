import axios from 'axios'
import React, { useState, useEffect } from 'react'
import FeaturedItemCard from './FeaturedItemCard'

const apiPath = 'https://auction-website89.herokuapp.com/main'

function ContainerFeaturedItems() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(apiPath)
      .then((res) => res.data)
      .then((data) => setData(data))
      .then(console.log(data))
  }, [])

  return (
    <div>
      <div className="flex pt-10 pl-5 text-xl font-bold">
        Swipe to view featured auctions...
      </div>

      <div className="flex flex-row overflow-x-scroll scrollbar-hide -space-x-2">
        <div>
          <FeaturedItemCard
            title={'Volkswagen Golf'}
            description={
              'Audio-Navigationssystem Discover Pro (Touchscreen, CD/DVD, MP3, Festplattenspeicher, Bluetooth), Fahrassistenz-Paket, Fahrassistenz-System: Adaptive Fahrwerksregelung (DCC) '
            }
            imgLink={
              'https://img.classistatic.de/api/v1/mo-prod/images/0b/0b0146c8-773e-4e6e-bde8-abddda4ca1dc?rule=mo-640.jpg'
            }
          />
        </div>
        <div>
          <FeaturedItemCard
            title={'Volkswagen Golf'}
            description={
              'Audio-Navigationssystem Discover Pro (Touchscreen, CD/DVD, MP3, Festplattenspeicher, Bluetooth), Fahrassistenz-Paket, Fahrassistenz-System: Adaptive Fahrwerksregelung (DCC) '
            }
            imgLink={
              'https://img.classistatic.de/api/v1/mo-prod/images/0b/0b0146c8-773e-4e6e-bde8-abddda4ca1dc?rule=mo-640.jpg'
            }
          />
        </div>
        <div>
          <FeaturedItemCard
            title={'Volkswagen Golf'}
            description={
              'Audio-Navigationssystem Discover Pro (Touchscreen, CD/DVD, MP3, Festplattenspeicher, Bluetooth), Fahrassistenz-Paket, Fahrassistenz-System: Adaptive Fahrwerksregelung (DCC) '
            }
            imgLink={
              'https://img.classistatic.de/api/v1/mo-prod/images/0b/0b0146c8-773e-4e6e-bde8-abddda4ca1dc?rule=mo-640.jpg'
            }
          />
        </div>
        <div>
          <FeaturedItemCard
            title={'Volkswagen Golf'}
            description={
              'Audio-Navigationssystem Discover Pro (Touchscreen, CD/DVD, MP3, Festplattenspeicher, Bluetooth), Fahrassistenz-Paket, Fahrassistenz-System: Adaptive Fahrwerksregelung (DCC) '
            }
            imgLink={
              'https://img.classistatic.de/api/v1/mo-prod/images/0b/0b0146c8-773e-4e6e-bde8-abddda4ca1dc?rule=mo-640.jpg'
            }
          />
        </div>
      </div>

      {/* <Swiper>
    <SwiperSlide>
      <FeaturedItemCard
        title={'Volkswagen Golf'}
        description={
          'Audio-Navigationssystem Discover Pro (Touchscreen, CD/DVD, MP3, Festplattenspeicher, Bluetooth), Fahrassistenz-Paket, Fahrassistenz-System: Adaptive Fahrwerksregelung (DCC) '
        }
        imgLink={
          'https://img.classistatic.de/api/v1/mo-prod/images/0b/0b0146c8-773e-4e6e-bde8-abddda4ca1dc?rule=mo-640.jpg'
        }
      />
    </SwiperSlide>
    <SwiperSlide>
      <FeaturedItemCard
        title={'Volkswagen Golf'}
        description={
          'Audio-Navigationssystem Discover Pro (Touchscreen, CD/DVD, MP3, Festplattenspeicher, Bluetooth), Fahrassistenz-Paket, Fahrassistenz-System: Adaptive Fahrwerksregelung (DCC) '
        }
        imgLink={
          'https://img.classistatic.de/api/v1/mo-prod/images/0b/0b0146c8-773e-4e6e-bde8-abddda4ca1dc?rule=mo-640.jpg'
        }
      />
    </SwiperSlide>
    <SwiperSlide>
      <FeaturedItemCard
        title={'Volkswagen Golf'}
        description={
          'Audio-Navigationssystem Discover Pro (Touchscreen, CD/DVD, MP3, Festplattenspeicher, Bluetooth), Fahrassistenz-Paket, Fahrassistenz-System: Adaptive Fahrwerksregelung (DCC) '
        }
        imgLink={
          'https://img.classistatic.de/api/v1/mo-prod/images/0b/0b0146c8-773e-4e6e-bde8-abddda4ca1dc?rule=mo-640.jpg'
        }
      />
    </SwiperSlide>
  </Swiper> */}
    </div>
  )
}

export default ContainerFeaturedItems