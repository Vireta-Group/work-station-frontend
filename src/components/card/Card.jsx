// MAHBUB❤️.................................................

const SingleCard = ({ title, value, Icon }) => {
  return (
    <div className="card  flex justify-between  items-center w-[13rem] h-[8rem] rounded-[10px] shadow-md border border-gray-200 dark:border-gray-700 p-4 dark:bg-[#171f2f]">
      <div className="flex flex-col gap-5">
        <h2 className="text-[1.2rem] dark:text-gray-500">{title}</h2>
        <b className="text-2xl dark:text-white">{value}</b>
      </div>
      <div>
        <Icon className="text-3xl dark:text-white" />
      </div>
    </div>
  );
};


const Card = ({ cardData }) => {
  return (
    <div>
      <div className="cards  w-full flex max-md:justify-center max-md:gap-5 gap-4 flex-wrap my-10 ">
        {cardData.map((card, index) => (
          <SingleCard
            key={index}
            title={card.title}
            value={card.value}
            Icon={card.Icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
