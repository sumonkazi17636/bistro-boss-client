
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu/useMenu';
import SubTitle from '../../../components/SubTitle/SubTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item =>item.category === 'dessert')
    const pizzas = menu.filter(item =>item.category === 'pizza')
    const salads = menu.filter(item =>item.category === 'salad')
    const soups = menu.filter(item =>item.category === 'soup')
    const offered = menu.filter(item =>item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss|Menu</title></Helmet>
            <Cover img={menuImg} title='our menu'></Cover>
            {/* main cover */}
            <SubTitle subHeading="Don't Miss" heading="Today's Offer"></SubTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory 
            items={desserts}
            title="Desserts"
            img={dessertImg}
            ></MenuCategory>


            <MenuCategory 
            items={pizzas}
            title="pizzas"
            img={pizzaImg}
            ></MenuCategory>


            <MenuCategory 
            items={salads}
            title="Salads"
            img={saladImg}
            ></MenuCategory>

            <MenuCategory 
            items={soups}
            title="Soups"
            img={soupImg}
            ></MenuCategory>
            
        </div>

    );
};

export default Menu;