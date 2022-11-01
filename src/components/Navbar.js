import {CartIcon} from '../icons'
import {useSelector} from 'react-redux'

const Navbar = () => {
    //  also valid const {amount} = useSelector((store) => store.cart);
    const {amount} = useSelector((store)=>store.cart)
    return (
        <nav>
            <div className="nav-center">
                <h3>redux toolkit</h3>
                <div className="nav-container">
                    <CartIcon/>
                </div>
                <div className="amount-container">
                    <p className="total-amount">{amount}</p>
                </div>
            </div>
        </nav>
    )
}
export default Navbar