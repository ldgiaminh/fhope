import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';


const AboutFour = () => {
    return (
            <div className="section section-padding case-study-featured-area">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-7 col-lg-6">
                        <div className="case-study-featured-thumb text-start">
                        <img src={process.env.PUBLIC_URL + "/images/others/case-study-4.png"} alt="travel" />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="case-study-featured">
                        <div className="section-heading heading-left">
                            <span className="subtitle"></span>
                            <h2 className="title">Chúng tôi tạo ra WEB này nhằm</h2>
                            <p>để đáp ứng như cầu của tất cả các bạn sinh viên trường FPT nói chung cũng như các bạn cần những tài liệu của chuyên nghành nói riêng. FHope được tạo ra nhằm mang tên ngôi trường đã nâng tầm trang web của chúng tôi, còn “HOPE” mang hy vọng cho các bạn có thể vượt ra được những vấn đề cũng như khó khăn mà các bạn đang gặp phải.</p>
                            <p>Ngày 17/2/2023, Web chúng tôi chính thức được tạo ra và được nhà trường cho lưu thông rộng rãi cả trong trường và ngoài trường. Nếu các bạn có muốn tham gia cũng như trở thành thành viên thì cũng rất dễ dàng vì chúng tôi sẽ luôn cần những nguồn nhân lực tốt để giúp cho web phát triển.</p>
                        </div>
                     
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutFour;