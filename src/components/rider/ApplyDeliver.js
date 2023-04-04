import React from "react";
import '../../css/detailfood.css'
const ApplyDeliver = () => {
  return (
    <div className="detailfood">
      <div className="boxfood">
        <div className="images">
          <div className="img-holder active">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.48788424986!2d106.6894303488601!3d-6.229728025769694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1680494955851!5m2!1sid!2sid" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="basic-info">
          <h1>Thank you, the food is being processed, please go to the store</h1>
        </div>
        <div className="description">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus temporibus corporis repudiandae, consectetur nostrum nisi commodi placeat rerum molestias numquam nihil accusantium deleniti! Enim, nesciunt a quis amet hic officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nemo accusantium tempora facere doloremque cum iusto, ut neque, fuga omnis libero laborum ullam. At dolorum qui atque labore illo dignissimos.</p>
        </div>
        <div className="options">
          <a href="/rider">Back</a>
        </div>
      </div>
    </div>
  )
}
export default ApplyDeliver;