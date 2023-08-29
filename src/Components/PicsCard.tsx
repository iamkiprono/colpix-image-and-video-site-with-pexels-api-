
const PicsCard = ({pic}) => {
  return (
    <div className="" >
        <img className="md:w-64 w-[350px] h-96 object-cover" src={pic.src.medium} alt={pic.alt} />
    </div>
  )
}

export default PicsCard