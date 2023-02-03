import { aboutWcdDesk } from "../../assets";
import SectionTitle from "../../component/sectionTitle";

const AboutUs: React.FC = () => {
  return (
    <main className="flex-grow">
      <section>
        <div className='bg-[url("/public/img/bg-page-gradient.png")] md:bg-[url("/public/img/bg-page-gradient-desktop.png")] pt-28 text-center md:mx-auto'>
          <SectionTitle title="World Cleanup Day" />
          <img
            className="mx-auto mt-6 mb-9 sm:w-[809px] sm:h-[455px] sm:my-[79px]"
            src={aboutWcdDesk}
            alt="about-img"
          />
          <div className="pr-7 pl-7 mx-auto pb-8 max-w-[1117px]">
            <p className="text-left">
              World Cleanup Day (WCD) dinisiasi pertama kali ole organisasi
              masyarakat di Estonia yang disebut Let's Do It pada tahun 2008.
              Pada tahun 2018 gerakan WCD dilakukan secara serentak di berbagai
              negara menjadi asal lahirnya World Cleanup Day sebagai aksi
              bersih-bersih secara serentak di seluruh Dunia dengan tujuan
              menyatukan umat manusia dari berbagai budaya, agama, ras dan
              membershkan dunia dari permasalahan sampah.
            </p>
            <p className="text-left">
              World Cleanup Day Indonesia (WCD Indonesia) diperkenalkan ole
              Let's Do It Indonesia yang merupakan organisasi di bawah jaringan
              Let's Do It World sejak tahun 2014 dan disupervisi oleh
              Greeneration Foundation & DFW Indonesia. Let's Do It World (LDIW)
              adalah bagian dari program resmi yang terakrediasi oleh UN
              Environment Programme dan mitra resmi dengan UN SDG
              Action Campaign.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
