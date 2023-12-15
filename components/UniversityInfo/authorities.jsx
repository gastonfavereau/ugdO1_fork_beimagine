import React from 'react';
import "./aboutUs.css";
import Image from 'next/image';


const Authorities = () => {

  return (
    <div style={{
          width:"100%",
          backgroundColor:"white",
          padding:"50px",
          paddingTop:"5rem",
          backgroundImage:"url(/cool-background.png)",
      }}>
      <p style={{
          textAlign:"center",
          color:"#1C3564",
          fontFamily: "Poppins",
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "38px",
        }}>Autoridades </p>
      <div style={{
        marginTop:"3rem",
        width:"100%",
        // border:"2px solid black",
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        gap:"2rem",
      }}>

      {/* card content */}
        <div class="card" style={{
          height:"300px",
          borderRadius:"15px",
        }}>
          <div style={{
            padding:"1rem",
            paddingLeft:"5rem"
          }}>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
              width:"60%",
              borderRadius:"100%",
              alignItems:"center"
            }}/>
            </div>
         
            <div class="container">
              <h4 className='card-title'><b>Rector</b></h4> 
              <p className='card-text'>Ing. Luis E. Lichowski</p> 
            </div>
            <div style={{
              marginTop:"1rem",
              display:"flex",
              gap:"0.3rem",
              justifyContent:"center",
            }}>
              <Image src={"/icons8-linkedin-48.png"} width={40} height={40}  />
              <Image src={"/icons8-twitterx-50.png"} width={35} height={30}  />
              {/* <Image src={"/twitter.svg"} width={100} height={100}  /> */}
            </div>
        </div>
        <div class="card" style={{
          height:"300px",
          borderRadius:"15px",
        }}>
          <div style={{
            padding:"1rem",
            paddingLeft:"5rem"
          }}>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
              width:"60%",
              borderRadius:"100%",
              alignItems:"center"
            }}/>
            </div>
         
            <div class="container">
              <h4><b>Vicerector</b></h4> 
              <p>Dr. Alfredo Poenitz</p> 
            </div>
            <div style={{
              marginTop:"1rem",
              display:"flex",
              gap:"0.3rem",
              justifyContent:"center",
            }}>
              <Image src={"/icons8-linkedin-48.png"} width={40} height={40}  />
              <Image src={"/icons8-twitterx-50.png"} width={35} height={30}  />
              {/* <Image src={"/twitter.svg"} width={100} height={100}  /> */}
            </div>
        </div>
        <div class="card" style={{
          height:"300px",
          borderRadius:"15px",
        }}>
          <div style={{
            padding:"1rem",
            paddingLeft:"5rem"
          }}>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
              width:"60%",
              borderRadius:"100%",
              alignItems:"center"
            }}/>
            </div>
         
            <div class="container">
              <h4><b>Secretaria Académica</b></h4> 
              <p>Lic. María Laura Carré</p> 
            </div>
            <div style={{
              marginTop:"1rem",
              display:"flex",
              gap:"0.3rem",
              justifyContent:"center",
            }}>
              <Image src={"/icons8-linkedin-48.png"} width={40} height={40}  />
              <Image src={"/icons8-twitterx-50.png"} width={35} height={30}  />
              {/* <Image src={"/twitter.svg"} width={100} height={100}  /> */}
            </div>
        </div>
        <div class="card" style={{
          height:"300px",
          borderRadius:"15px",
        }}>
          <div style={{
            padding:"1rem",
            paddingLeft:"5rem"
          }}>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
              width:"60%",
              borderRadius:"100%",
              alignItems:"center"
            }}/>
            </div>
         
            <div class="container">
              <h4><b>Secretaría de Extensión Universitaria</b></h4> 
              <p>Lic. Irina Flecha</p> 
            </div>
            <div style={{
              marginTop:"1rem",
              display:"flex",
              gap:"0.3rem",
              justifyContent:"center",
            }}>
              <Image src={"/icons8-linkedin-48.png"} width={40} height={40}  />
              <Image src={"/icons8-twitterx-50.png"} width={35} height={30}  />
              {/* <Image src={"/twitter.svg"} width={100} height={100}  /> */}
            </div>
        </div>
        <div class="card" style={{
          height:"300px",
          borderRadius:"15px",
        }}>
          <div style={{
            padding:"1rem",
            paddingLeft:"5rem"
          }}>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
              width:"60%",
              borderRadius:"100%",
              alignItems:"center"
            }}/>
            </div>
         
            <div class="container">
              <h4><b>Secretario de Tecnología e Innovación Educativa</b></h4> 
              <p>Ing. Roberto Suenaga</p> 
            </div>
            <div style={{
              marginTop:"1rem",
              display:"flex",
              gap:"0.3rem",
              justifyContent:"center",
            }}>
              <Image src={"/icons8-linkedin-48.png"} width={40} height={40}  />
              <Image src={"/icons8-twitterx-50.png"} width={35} height={30}  />
              {/* <Image src={"/twitter.svg"} width={100} height={100}  /> */}
            </div>
        </div>
        <div class="card" style={{
          height:"300px",
          borderRadius:"15px",
        }}>
          <div style={{
            padding:"1rem",
            paddingLeft:"5rem"
          }}>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
              width:"60%",
              borderRadius:"100%",
              alignItems:"center"
            }}/>
            </div>
         
            <div class="container">
              <h4><b>Secretario de Investigación y Desarrollo</b></h4> 
              <p>Ing. Juan Pablo Cinto</p> 
            </div>
            <div style={{
              marginTop:"1rem",
              display:"flex",
              gap:"0.3rem",
              justifyContent:"center",
            }}>
              <Image src={"/icons8-linkedin-48.png"} width={40} height={40}  />
              <Image src={"/icons8-twitterx-50.png"} width={35} height={30}  />
              {/* <Image src={"/twitter.svg"} width={100} height={100}  /> */}
            </div>
        </div>
        <div class="card" style={{
          height:"300px",
          borderRadius:"15px",
        }}>
          <div style={{
            padding:"1rem",
            paddingLeft:"5rem"
          }}>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
              width:"60%",
              borderRadius:"100%",
              alignItems:"center"
            }}/>
            </div>
         
            <div class="container">
              <h4><b>Delegada rectoral Centro Académico Buenos Aires</b></h4> 
              <p>Mgter. Gabriela Lichowski</p> 
            </div>
            <div style={{
              marginTop:"1rem",
              display:"flex",
              gap:"0.3rem",
              justifyContent:"center",
            }}>
              <Image src={"/icons8-linkedin-48.png"} width={40} height={40}  />
              <Image src={"/icons8-twitterx-50.png"} width={35} height={30}  />
              {/* <Image src={"/twitter.svg"} width={100} height={100}  /> */}
            </div>
        </div>
        <div class="card" style={{
          height:"300px",
          borderRadius:"15px",
        }}>
          <div style={{
            padding:"1rem",
            paddingLeft:"5rem"
          }}>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
              width:"60%",
              borderRadius:"100%",
              alignItems:"center"
            }}/>
            </div>
         
            <div class="container">
              <h4><b>Secretaria Académica</b></h4> 
              <p>Lic. María Laura Carré</p> 
            </div>
            <div style={{
              marginTop:"1rem",
              display:"flex",
              gap:"0.3rem",
              justifyContent:"center",
            }}>
              <Image src={"/icons8-linkedin-48.png"} width={40} height={40}  />
              <Image src={"/icons8-twitterx-50.png"} width={35} height={30}  />
              {/* <Image src={"/twitter.svg"} width={100} height={100}  /> */}
            </div>
        </div>
        <div class="card" style={{
          height:"300px",
          borderRadius:"15px",
        }}>
          <div style={{
            padding:"1rem",
            paddingLeft:"5rem"
          }}>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
              width:"60%",
              borderRadius:"100%",
              alignItems:"center"
            }}/>
            </div>
         
            <div class="container">
              <h4><b>Secretaria Académica</b></h4> 
              <p>Lic. María Laura Carré</p> 
            </div>
            <div style={{
              marginTop:"1rem",
              display:"flex",
              gap:"0.3rem",
              justifyContent:"center",
            }}>
              <Image src={"/icons8-linkedin-48.png"} width={40} height={40}  />
              <Image src={"/icons8-twitterx-50.png"} width={35} height={30}  />
              {/* <Image src={"/twitter.svg"} width={100} height={100}  /> */}
            </div>
        </div>
        <div class="card" style={{
          height:"300px",
          borderRadius:"15px",
        }}>
          <div style={{
            padding:"1rem",
            paddingLeft:"5rem"
          }}>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
              width:"60%",
              borderRadius:"100%",
              alignItems:"center"
            }}/>
            </div>
         
            <div class="container">
              <h4><b>Secretaria Académica</b></h4> 
              <p>Lic. María Laura Carré</p> 
            </div>
            <div style={{
              marginTop:"1rem",
              display:"flex",
              gap:"0.3rem",
              justifyContent:"center",
            }}>
              <Image src={"/icons8-linkedin-48.png"} width={40} height={40}  />
              <Image src={"/icons8-twitterx-50.png"} width={35} height={30}  />
              {/* <Image src={"/twitter.svg"} width={100} height={100}  /> */}
            </div>
        </div>
        <div class="card" style={{
          height:"300px",
          borderRadius:"15px",
        }}>
          <div style={{
            padding:"1rem",
            paddingLeft:"5rem"
          }}>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
              width:"60%",
              borderRadius:"100%",
              alignItems:"center"
            }}/>
            </div>
         
            <div class="container">
              <h4><b>Secretaria Académica</b></h4> 
              <p>Lic. María Laura Carré</p> 
            </div>
            <div style={{
              marginTop:"1rem",
              display:"flex",
              gap:"0.3rem",
              justifyContent:"center",
            }}>
              <Image src={"/icons8-linkedin-48.png"} width={40} height={40}  />
              <Image src={"/icons8-twitterx-50.png"} width={35} height={30}  />
              {/* <Image src={"/twitter.svg"} width={100} height={100}  /> */}
            </div>
        </div>
        <div class="card" style={{
          height:"300px",
          borderRadius:"15px",
        }}>
          <div style={{
            padding:"1rem",
            paddingLeft:"5rem"
          }}>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
              width:"60%",
              borderRadius:"100%",
              alignItems:"center"
            }}/>
            </div>
         
            <div class="container">
              <h4><b>Secretaria Académica</b></h4> 
              <p>Lic. María Laura Carré</p> 
            </div>
            <div style={{
              marginTop:"1rem",
              display:"flex",
              gap:"0.3rem",
              justifyContent:"center",
            }}>
              <Image src={"/icons8-linkedin-48.png"} width={40} height={40}  />
              <Image src={"/icons8-twitterx-50.png"} width={35} height={30}  />
              {/* <Image src={"/twitter.svg"} width={100} height={100}  /> */}
            </div>
        </div>
        <div class="card" style={{
          height:"300px",
          borderRadius:"15px",
        }}>
          <div style={{
            padding:"1rem",
            paddingLeft:"5rem"
          }}>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
              width:"60%",
              borderRadius:"100%",
              alignItems:"center"
            }}/>
            </div>
         
            <div class="container">
              <h4><b>Secretaria Académica</b></h4> 
              <p>Lic. María Laura Carré</p> 
            </div>
            <div style={{
              marginTop:"1rem",
              display:"flex",
              gap:"0.3rem",
              justifyContent:"center",
            }}>
              <Image src={"/icons8-linkedin-48.png"} width={40} height={40}  />
              <Image src={"/icons8-twitterx-50.png"} width={35} height={30}  />
              {/* <Image src={"/twitter.svg"} width={100} height={100}  /> */}
            </div>
        </div>
        <div class="card" style={{
          height:"300px",
          borderRadius:"15px",
        }}>
          <div style={{
            padding:"1rem",
            paddingLeft:"5rem"
          }}>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
              width:"60%",
              borderRadius:"100%",
              alignItems:"center"
            }}/>
            </div>
         
            <div class="container">
              <h4><b>Secretaria Académica</b></h4> 
              <p>Lic. María Laura Carré</p> 
            </div>
            <div style={{
              marginTop:"1rem",
              display:"flex",
              gap:"0.3rem",
              justifyContent:"center",
            }}>
              <Image src={"/icons8-linkedin-48.png"} width={40} height={40}  />
              <Image src={"/icons8-twitterx-50.png"} width={35} height={30}  />
              {/* <Image src={"/twitter.svg"} width={100} height={100}  /> */}
            </div>
        </div>
        <div class="card" style={{
          height:"300px",
          borderRadius:"15px",
        }}>
          <div style={{
            padding:"1rem",
            paddingLeft:"5rem"
          }}>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
              width:"60%",
              borderRadius:"100%",
              alignItems:"center"
            }}/>
            </div>
         
            <div class="container">
              <h4><b>Secretaria Académica</b></h4> 
              <p>Lic. María Laura Carré</p> 
            </div>
            <div style={{
              marginTop:"1rem",
              display:"flex",
              gap:"0.3rem",
              justifyContent:"center",
            }}>
              <Image src={"/icons8-linkedin-48.png"} width={40} height={40}  />
              <Image src={"/icons8-twitterx-50.png"} width={35} height={30}  />
              {/* <Image src={"/twitter.svg"} width={100} height={100}  /> */}
            </div>
        </div>
        <div class="card">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
            width:"100%"
          }}/>
          <div class="container">
            <h4><b>John Doe</b></h4> 
            <p>Architect & Engineer</p> 
          </div>
        </div>
        <div class="card">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
            width:"100%"
          }}/>
          <div class="container">
            <h4><b>John Doe</b></h4> 
            <p>Architect & Engineer</p> 
          </div>
        </div>
        <div class="card">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
            width:"100%"
          }}/>
          <div class="container">
            <h4><b>John Doe</b></h4> 
            <p>Architect & Engineer</p> 
          </div>
        </div>
        <div class="card">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
            width:"100%"
          }}/>
          <div class="container">
            <h4><b>John Doe</b></h4> 
            <p>Architect & Engineer</p> 
          </div>
        </div>
        <div class="card">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
            width:"100%"
          }}/>
          <div class="container">
            <h4><b>John Doe</b></h4> 
            <p>Architect & Engineer</p> 
          </div>
        </div>
        <div class="card">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
            width:"100%"
          }}/>
          <div class="container">
            <h4><b>John Doe</b></h4> 
            <p>Architect & Engineer</p> 
          </div>
        </div>
        <div class="card">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
            width:"100%"
          }}/>
          <div class="container">
            <h4><b>John Doe</b></h4> 
            <p>Architect & Engineer</p> 
          </div>
        </div>
        <div class="card">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
            width:"100%"
          }}/>
          <div class="container">
            <h4><b>John Doe</b></h4> 
            <p>Architect & Engineer</p> 
          </div>
        </div>
        <div class="card">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
            width:"100%"
          }}/>
          <div class="container">
            <h4><b>John Doe</b></h4> 
            <p>Architect & Engineer</p> 
          </div>
        </div>
        <div class="card">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
            width:"100%"
          }}/>
          <div class="container">
            <h4><b>John Doe</b></h4> 
            <p>Architect & Engineer</p> 
          </div>
        </div>
        <div class="card">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
            width:"100%"
          }}/>
          <div class="container">
            <h4><b>John Doe</b></h4> 
            <p>Architect & Engineer</p> 
          </div>
        </div>
        <div class="card">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
            width:"100%"
          }}/>
          <div class="container">
            <h4><b>John Doe</b></h4> 
            <p>Architect & Engineer</p> 
          </div>
        </div>
        <div class="card">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
            width:"100%"
          }}/>
          <div class="container">
            <h4><b>John Doe</b></h4> 
            <p>Architect & Engineer</p> 
          </div>
        </div>
        <div class="card">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
            width:"100%"
          }}/>
          <div class="container">
            <h4><b>John Doe</b></h4> 
            <p>Architect & Engineer</p> 
          </div>
        </div>
        <div class="card">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{
            width:"100%"
          }}/>
          <div class="container">
            <h4><b>John Doe</b></h4> 
            <p>Architect & Engineer</p> 
          </div>
        </div>
      

      </div>
    </div>
  );
};

export default Authorities;
