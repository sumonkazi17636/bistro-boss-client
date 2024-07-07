

const FoodCard = ({item}) => {
    const {name,image,price,recipe} = item
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">{price}</p>
                <figure>
                    <img
                        src={image}
                        alt="Image" />
                </figure>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title ">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline bottom-0 border-b-4 bg-slate-100 border-orange-400">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;