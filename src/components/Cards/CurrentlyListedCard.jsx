import React from 'react'

function CurrentlyListedCard({
  itemid,
  title,
  price,
  days,
  hours,
  km,
  type,
  classic,
  pic,
}) {
  return (
    <div className="flex py-2 px-1 sm:p-3 bg-bgColor border border-gray-300 mb-2 rounded-md justify-between">
      <div className="flex space-x-2">
        <a href={`/bids/${itemid}`}>
          <img
            src={pic}
            className="w-12 h-10 sm:w-16 sm:h-12 rounded-md object-cover"
            alt="listed-car"
          />
        </a>
        <div className="flex flex-col items-start">
          <a
            href={`/bids/${itemid}`}
            className="w-max font-semibold whitespace-nowrap overflow-hidden text-ellipsis"
          >
            {title}
          </a>
          <div className="text-xs sm:text-sm font-light">
            Listed for <strong>{price}</strong>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <a
          href={`/bids/${itemid}`}
          className="flex w-20 h-10 justify-center items-center bg-primary text-white rounded-full shadow-md scale-90 sm:scale-100 hover:w-[6rem] transition-all"
        >
          View
        </a>
      </div>
    </div>
  )
}

export default CurrentlyListedCard
