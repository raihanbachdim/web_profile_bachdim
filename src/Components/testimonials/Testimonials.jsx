import React from 'react'
import "./testimoni.scss"

export default function Testimonials() {
    const data = [
        {
          id: 1,
          name: "Sekolah Dasar",
          title: "SDN Tanggulun II",
          img:
            "https://images.pexels.com/photos/8466714/pexels-photo-8466714.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          // icon: "assets/twitter.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
          id: 2,
          name: "Sekolah Menengah Kejuruan",
          title: "SMKS Medikacom Bandung",
          img:
            "https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          // icon: "assets/youtube.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
          featured: true,
        },
        {
          id: 3,
          name: "Sekolah Menengah Pertama",
          title: "SMPN 1 Ibun",
          img:
            "https://images.pexels.com/photos/3380743/pexels-photo-3380743.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          // icon: "assets/linkedin.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
      ];
    return (
        <div className="testimonials" id="testimoni">
            <h1>About</h1>
            <div className="container">
                {data.map((d) => (
                    // jika featured maka akan menjadi card featured jika tidak maka hanya card saja
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        {/* <img src="assets/right-arrow.png" className="left" alt="" /> */}
                        <img src={d.img} className="user" alt="" />
                        <img src={d.icon} className="right" alt="" />
                    </div>
                    <div className="center">
                      {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
