import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import ProcessOne from '../component/process/ProcessOne';
import AboutThree from '../component/about/AboutThree';
import AboutFour from '../component/about/AboutFour';
import AboutFive from '../component/about/AboutFive';


const AboutUs = () => {

    return (
        <>
        <SEO title="About us" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BcrumbBannerOne 
                title="Về chúng tôi"
                paragraph ="<b>Bạn đã bao giờ tự hỏi những tài liệu học tập bạn cần sẽ kiếm ở đâu chưa ? </b> 
                </br>Đó là câu hỏi mà câu trả lời nó sẽ là thành quả của 
                </br>chúng tôi. Web học tập hỗ trợ sinh viên FPT cũng như những ai cần source học cho chuyên nghành của mình.
                <br>Tài liệu có thể chia thành nhiều loại khác biệt, ở đâu chúng tôi sẽ có đầy đủ những tài liệu mà các bạn cần."
                styleClass="thumbnail-4"
                mainThumb="/images/banner/banner-thumb-3.png"
                />
                <AboutFour />
                <ProcessOne />
                <CtaLayoutOne />
                <FooterOne parentClass="" />
            </main>
        </>
    )
}

export default AboutUs;