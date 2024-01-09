const HeroSection = () =>{
return <main className="hero container">
    <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR BEST SHOES. 
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR BEST SHOES. 
        </p>
        <div className="hero-btn">
            <button>SHOP NOW</button>
            <button className="secondary-btn">CATEGORY</button>
        </div>
        <div className="shopping">
            <p>Also Available On</p>
            <div className="brand-icon">
                <img src="amazon_logo.png" alt="amazon_logo"/>
                <img src="flipkart.png" alt="flipkart"/>
            </div>
        </div>
    </div>
    <div className="heroimage">
        <img src="shoe.png" alt="heroshoe"/>
    </div>
</main>
};

export default HeroSection;