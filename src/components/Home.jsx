import '../App.css';

export default function Home() {
  return (
    <div>
      <div className="centerLaptopText">
        <div className="laptopLeft innerLaptop ">
          <h1 className='innerLaptopH1'>Welcome</h1>
          <p>My name is Yehor Fal and this is my Portfolio</p>
        </div>
        <div className="laptopRight">
          <img src="../../public/laptop.svg" alt="laptop" className='innerLaptop' style={{ width: "500px" }} />
        </div>
        
        
      </div>
    </div>
  )
}