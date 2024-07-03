
import SubTitle from "../../../components/SubTitle/SubTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item =>item.category === 'popular')
    return (
        <section className=" mb-12">
            <SubTitle
            subHeading='Popular Items'
            heading='From Our Menu'
            >

            </SubTitle>

            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item =><MenuItem
                    key={item._id}
                    item={item}
                    >
                    </MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;