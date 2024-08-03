import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const App = () => {
  // useGSAP(()=>{
  //   gsap.to(".box",{
  //     x:200,
  //     duration:1,
  //     delay:1
  //   })
  // })

  // const gsapref = useRef();
  // useGSAP(() => {
  //   gsap.to(gsapref.current, {
  //     x: 200,
  //     duration: 1,
  //     delay: 1,
  //   });
  // });

  // useGSAP(()=>{
  //   gsap.from(".box",{
  //     duration:1,
  //     rotate:360,
  //     y:300,
  //     delay:1,
  //     opacity:0
  //   })
  // })

  // const boxfex=useRef()
  // useGSAP(()=>{
  //   gsap.from(boxfex.current,{
  //     duration:1,
  //     rotate:360,
  //     y:300,
  //     delay:1,
  //     opacity:0
  //   })
  // })
  // ref={boxfex}

  // useGSAP(()=>{
  //     gsap.from(".box",{
  //       duration:1,
  //       rotate:360,
  //       y:300,
  //       delay:1,
  //       opacity:0
  //     })
  //   },{scope:".containor"})
  // also we use useref fro containor

  // const [circlee, setCirclee] = useState(0)
  // const random=gsap.utils.random(-500,500,100)
  // useGSAP(()=>{
  //   gsap.to(".circle",{
  //     x:circlee,
  //     direction:0.5
  //   })
  // },[circlee])



  const [xvalue, setXvalue] = useState(0)
  const [rot, setrot] = useState(0)
  const [yvalue, setYvalue] = useState(0)
  const randomx=gsap.utils.random(-500,500,100)
  const rotatex=gsap.utils.random(-360,360,30)
  const randomy=gsap.utils.random(-500,500,10)
  const imgref=useRef()
  useGSAP(()=>{
    gsap.to(imgref.current,{
      x:xvalue,
      y:yvalue,
      duration:1,
      rotate:rot
    })
  },[xvalue,yvalue,rotatex])


  // const{contextSafe}=useGSAP()
  // const boxref=useRef()
  // const rotatebox=contextSafe(function(){
  //   gsap.to(boxref.current,{
  //     rotate:720,
  //     direction:1
  //   })
  // })
  return (
    <main>
      {/* <div ref={gsapref} className="box"></div> */}

      {/* <div className="containor">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
      <div className="kuch">
        <div className="circle"></div>
        <div className="box"></div>
      </div> */}

      {/* <button onClick={()=>{
        setCirclee(random)
      }}>Animate</button>
      <div className="circle"></div> */}

      <button
        onClick={() => {
          setXvalue(randomx);
          setrot(rotatex)
          setYvalue(randomy)
        }}
      >
        Animate
      </button>
      <img ref={imgref} src="https://images.vexels.com/media/users/3/242241/isolated/preview/409d95bf597e130c6c1b1d2ac3f5dbf5-side-fly-geometric-color-stroke.png" alt="" />
      

      {/* <button onClick={rotatebox}>Animate</button>
      <div ref={boxref} className="box"></div> */}

    </main>
  );
};

export default App;
