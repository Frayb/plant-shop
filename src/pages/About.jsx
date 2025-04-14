import {Link} from 'react-router-dom'
const About =()=>{
    return(
        <div className="main">
            <div className="grid">
            <h1 className="about-title">About Us</h1>
            <p>Nestled in the heart of nature, Plant Nursery Paradise is your one-stop destination for vibrant greenery, blooming flowers, and lush indoor and outdoor plants. Whether you're a seasoned gardener or just beginning your plant journey, we offer a diverse selection of high-quality plants to transform your space into a natural oasis. </p>
            <p>At Plant Nursery Paradise, we believe that plants bring life, beauty, and tranquility to any environment. Our carefully curated collection includes everything from low-maintenance succulents to exotic tropical plants, ensuring there's something for every plant lover. With expert guidance, eco-friendly gardening tips, and top-quality products, we are committed to helping you cultivate a thriving and refreshing space. Let’s grow together! 🌱✨</p>
            <Link to ='/product'><button className='shop-btn'>Shop Now</button> </Link>
            </div>
        </div>
    )
}
export default About;