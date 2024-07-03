import SubTitle from "../../../components/SubTitle/SubTitle";
import featuredImage from '../../../assets/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item text-white pt-8 my-20 bg-fixed">
           
            <SubTitle
            subHeading='Check it out'
            heading='Featured Items'>
            </SubTitle>
            <div className="md:flex justify-between items-center pb-20 pt-12 mx-36 bg-slate-500 bg-opacity-50">
                    <div>
                        <img src={featuredImage} alt="" />
                    </div>
                    <div className="md:ml-10">
                    <p>July 20,2024</p>
                    <p className="uppercase">Where can i get some</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores officia eligendi officiis alias possimus, labore nihil sequi quaerat nam sit id laboriosam soluta exercitationem cupiditate illum saepe eveniet vitae. Neque autem hic voluptatibus nemo, ratione cum molestiae, sed accusantium eligendi temporibus aliquid aspernatur odio accusamus maiores, totam magni dolorem!</p>
                   <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button> 
                    </div>
                </div>
        </div>
    );
};

export default Featured;