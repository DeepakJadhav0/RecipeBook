import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SkeletonCards() {
  return (
    <div className="flex flex-wrap justify-center gap-5 my-6 p-5">
      {Array(8)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className=" p-3 w-[280px] rounded-md shadow-2xl"
          >
            <Skeleton height={208} className="rounded-md" />

            <div className="mt-2">
              <Skeleton height={20} width="80%" />
              <Skeleton height={14} width="60%" />
            </div>
          </div>
        ))}
    </div>
  )
}
