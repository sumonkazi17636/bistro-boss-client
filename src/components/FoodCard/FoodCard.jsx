import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item
    const { user } = useAuth()
    const navigate = useNavigate()

    const handleAddToCart = food => {
        if (user && user.email) {
            //send cart to the databse
        }
        else {
            Swal.fire({
                title: "You Are Not Logged In",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            });
        }
    }
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
                        <button
                            onClick={() => handleAddToCart(item)}
                            className="btn btn-outline bottom-0 border-b-4 bg-slate-100 border-orange-400">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;