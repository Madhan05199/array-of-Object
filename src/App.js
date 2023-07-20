import logo from './logo.svg';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const cards=[{name:"PUMA",
                model:"level Sneakers For Men  (Blue, Green)",
                price:"₹2,407",
                image:"https://www.freepnglogos.com/uploads/shoes-png/dance-shoes-png-transparent-dance-shoes-images-5.png",
                color:"Orange",
                size:"M",
                des:"A shoe is an item of footwear intended to protect and comfort the human foot. Though the human foot can adapt to varied terrains and climate conditions, it is vulnerable, and shoes provide protection. Form was originally tied to function but over time shoes also became fashion items."},
               
                {name:"NIKE",
                model:"primietro ms Running Shoes For Men",
                price:"₹3,499",
                image:"https://www.freepnglogos.com/uploads/shoes-png/download-nike-shoes-transparent-png-for-designing-projects-16.png",
                color:"Red with black",
                size:"S",
                des:"Nike has long been known for running and basketball shoes, but the Nike Metcons have quickly gained cult status as the best workout shoes the company has ever made."},  
                
                {name:"NIKE",
                model:"RUN SWIFT Running Shoe For Men  (Black)",
                price:"₹1,299",
                image:"https://www.freepnglogos.com/uploads/shoes-png/dance-shoes-png-transparent-dance-shoes-images-36.png",
                color:"White with black",
                size:"L",
                des:"Nike has long been known for running and basketball shoes, but the Nike Metcons have quickly gained cult status as the best workout shoes the company has ever made."},
                
                {name:"REEBOK",
                model:"RUN SWIFT Running Shoe For Men  (Black)",
                price:"₹2,589",
                image:"https://www.freepnglogos.com/uploads/shoes-png/mens-shoes-png-transparent-images-images-11.png",
                color:"Classic Brown",
                size:"L",
                des:"Reebok International Limited is an American fitness footwear and clothing brand that is a part of Authentic Brands Group."},

                 
                {name:"WOODLAND",
                model:"Inspire 2.0 M Running Shoes For Men  (Grey)",
                price:"₹3,899",
                image:"https://www.freepnglogos.com/uploads/shoes-png/download-running-shoes-png-image-png-image-pngimg-4.png",
                color:"Grey & red",
                size:"XL",
                des:"Every Woodland Shoe Manufactured is Almost 100% Eco-friendly. Woodland shoes are committed to the cause of a greener and eco-friendly planet. Woodland shoes are made through processes that cause minimal harm to the environment."},

                {name:"NIKE",
                model:"NK AIR PEGASUS '89 Running Shoes For Men",
                price:"₹4,599",
                image:"https://www.freepnglogos.com/uploads/shoes-png/find-your-perfect-running-shoes-26.png",
                color:"Grey & red",
                size:"M & S",
                des:"Nike has long been known for running and basketball shoes, but the Nike Metcons have quickly gained cult status as the best workout shoes the company has ever made."},
                
                {name:"REEBOK",
                model:"ZIGWILD TR 6 Running Shoes For Men  (Brown)",
                price:"₹3,999",
                image:"https://www.freepnglogos.com/uploads/shoes-png/shoes-png-srinivascreations-deviantart-1.png",
                color:"Brown",
                size:"M,L,S",
                des:"Reebok International Limited is an American fitness footwear and clothing brand that is a part of Authentic Brands Group."},

                {name:"ALLEN SOLLY",
                model:"Running Shoes For Men  (Blue)",
                price:"₹2,859",
                image:"https://www.freepnglogos.com/uploads/shoes-png/shoes-png-transparent-image-pngpix-9.png",
                color:"Sandal",
                size:"L",
                des:"Get Allen Solly casual shoes in black, white, grey & more colours online at best price. Select Allen Solly Shoes in various colours, materials,."},
                {name:"BATA",
                model:"Running Shoes For Men  (Blue)",
                price:"₹2,859",
                image:"https://www.freepnglogos.com/uploads/shoes-png/running-shoes-png-transparent-running-shoes-images-6.png",
                color:"Sandal",
                size:"L",
                des:"Get Allen Solly casual shoes in black, white, grey & more colours online at best price. Select Allen Solly Shoes in various colours, materials,."},
              ]
                
  return (
    <section id="cards">
      <div className="container">
        <div className="row">
        
        { cards.map((value,index)=>{
            return <div className="col-md-6 col-lg-4 pb-5 d-flex justify-content-center">
            <div className="card" key={index}>
                      <div className='background'>
                        <div className='title'>
                          <span>{value.name}</span>
                          <p>{value.des}</p>
                          </div>
                        <div className='image'>
                        <img src={value.image} alt="" />
                        </div>
                     </div>
                      <div className='content'>
                        <p>{value.name}</p>
                        <span>{value.model}</span>
                        <div className='details'>
                          <div className='size'>
                            {value.size}
                          </div>
                          <div className='color'>
                            <span style={{color:"#E66436",fontSize:"18px"}}>color: <span style={{fontWeight:"bold"}}>{value.color}</span></span>
                          </div>
                        </div>
                        <p style={{fontSize:"10px",color:"rgba(0,0,0,0.8)",fontWeight:"600"}}>{value.des}</p>
                        <div className='amount'>
                        <span>{value.price}</span>
                        </div>
                        <div className="cart">
                            <button><i className="bi bi-cart-check-fill"></i> Add to Cart</button>
                        </div>
                      </div> 
                    </div> 
                    </div> 
        })
      
       }   
       
        </div> 
      </div>
    </section>
  );
}

export default App;
