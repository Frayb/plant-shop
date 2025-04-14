import {Link} from 'react-router-dom';


const Landing = () =>{
    return(
        <div className='landing-container'>
            <div className='landing-left'>
                <h1 className='title'>Plant Nursery Paradise🌿🌸</h1>
                <Link to ='/product'><button className='shop-btn'>Get Started</button>
                </Link>
            </div>
        </div>
    )
}
export default Landing;
