import styles from './experience.module.css';
import CardSet from '../../components/CardSet';
import TitleBanner from '../../components/TitleBanner';
import { TextBoxProps } from '../../components/TextBox';
import { CardProps } from '../../components/Card';
import Card from '@/components/Card';

const bmdBanner: TextBoxProps = {
    textTitle: "Broadway Media Distribution"
};

const fsBanner: TextBoxProps = {
    textTitle: "Fresno State Student Housing"
};

export default function Experience() {

    return (
        <div className="main-container">
            <TitleBanner
                id="bmd-banner"
                invert={false}
                textBoxProps={bmdBanner}
            />
            <CardSet id="bmd-cardset">
                <Card
                    imageSrc="assets/images/bmd-sample.jpg"
                    cardTitle="Web Design"
                    description="I designed a marketing website and a few webpages for the main BMD website using Webflow. I've included a prototype I designed in Figma with temporary text."
                    cardLink="assets/files/bmd-prototype.pdf"
                    linkDescription="See sample"
                />
                <Card
                    imageSrc="assets/images/ruby-on-rails.jpg"
                    cardTitle="Ruby on Rails"
                    description="I also ran queries with Ruby on Rails and wrote Ruby code for deployment on a production server."
                />
            </CardSet>
            <TitleBanner
                id="fs-housing-banner"
                invert={true}
                textBoxProps={fsBanner}
            />
            <CardSet id="fs-housing-cardset">
                <Card
                    imageSrc="assets/images/fs-housing-sample.png"
                    cardTitle="Web Design"
                    description="I redesigned the entire Student Housing frontend to match the new Fresno State website redesign."
                />
                <Card
                    imageSrc="assets/images/fs-housing-content.png"
                    cardTitle="Content Maintenance"
                    description="I also updated content on the Fresno State Student Housing website to ensure it remained relevant."
                />
                <Card
                    imageSrc="assets/images/admin-stock.jpg"
                    cardTitle="Administration"
                    description="I was involved in several administrative tasks, such as planning events and hiring a new coordinator."
                />
            </CardSet>
        </div>
    );
}