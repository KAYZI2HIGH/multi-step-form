import Image from 'next/image';
import React from 'react'

const StepFour = () => {
  return (
    <section className="space-x-5 border border-white/20 rounded-md overflow-hidden">
      <div className="w-full py-[2px] bg-white/10 rounded-t-md border border-white/20 text-[24px] text-white/60 text-center">
        Miles Responsibility
      </div>
      <div className="flex gap-4 max-md:flex-col">
        <div className="relative flex-1 rounded-md">
          <Image
            src={"/images/image.jpg"}
            fill
            alt="miles mission"
            className='object-cover object-left'
          />
        </div>
        <p className="flex-1 my-5 px-2 ml-4">
          Throughout the history, globalization and technological developments
          have always had a great effect on transportation. Today, everybody
          transports above the clouds and under the seas in more different ways
          and durations compared to past. While airplane was an extreme
          transportation vehicle for most of us only a quarter century ago, many
          people use it in their daily routines in today. Airlines organize so
          many campaigns like elastic schedules, promotion gifts and discounts
          to maintain this increase in number of people who fly regularly and
          often. Bonus miles is only one of them. Airlines offer bonus miles to
          the passenger in accordance with the length and frequency of their
          flights. However most of these miles go waste without growing enough
          to get a small gift like teddy bear let alone a free bonus ticket.
        </p>
      </div>
    </section>
  );
}

export default StepFour