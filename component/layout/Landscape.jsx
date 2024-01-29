import Image from 'next/image'
import React from 'react'

const Landscape = () => {
  return (
    <div className="landscape_mobile">
        <div className="landscape_view">
            <div>
                <div className="rotating_image">
                <Image width={180} height={150} src={"/assets/images/rotate.svg"} alt='rotate'/>
                </div>
                <div className="landscape_text">
                    <h3>Please rotate your device</h3>
                    <p>
                        We do not support landscape mode, <br/>please use the website in the portrait mode for best experience.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landscape