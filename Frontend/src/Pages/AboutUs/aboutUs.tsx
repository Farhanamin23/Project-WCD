import { aboutWcd } from "../../assets";
import SectionTitle from "../../component/sectionTitle";

const AboutUs: React.FC = () => {
  return (
    <main>
      <section>
        <div className="pt-28 text-center md:mx-auto">
          <SectionTitle title="World Cleanup Day" />
          <img
            className="mx-auto mt-6 mb-9 sm:w-[809px] sm:h-[455px] sm:my-[79px]"
            src={aboutWcd}
            alt="about-img"
          />
          <div className="pr-7 pl-7 mx-auto">
            <p className="text-left">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur aut explicabo odio ut qui blanditiis sequi fugiat
              maxime praesentium magni doloremque, perferendis rem voluptatem
              deleniti velit dolor vitae repudiandae nulla? Excepturi ratione,
              reiciendis sapiente sint quibusdam sed aperiam ullam itaque nisi
              voluptatum delectus dolores asperiores illo autem necessitatibus
              architecto Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Consequatur illo quibusdam perspiciatis. Doloremque corporis
              nihil ea! Itaque perspiciatis iure vitae, ex nam porro dicta quo
              accusamus illo possimus enim quos beatae mollitia quaerat est. Ab,
              mollitia exercitationem? Nobis doloribus hic voluptatem optio
              dignissimos aut at. Perferendis, iste? Cumque explicabo dolore,
              dolores distinctio mollitia libero tenetur eligendi accusamus
              voluptatem quo nostrum porro minima voluptates incidunt sapiente
              rem voluptatibus voluptate commodi deserunt ad natus animi maxime
              ipsam aliquam. Assumenda nobis temporibus aperiam consectetur
              dicta. Numquam consequuntur harum, pariatur fuga nisi perspiciatis
              eos debitis, dicta unde enim aliquam autem! Numquam ab dolore
              minima!
            </p>
            <p className="mt-4 mb-4 text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              asperiores perspiciatis laborum praesentium velit recusandae
              molestias itaque vel enim eligendi omnis dicta dolor minima id
              iure nulla at iusto ullam libero, sed quas sunt dolores. Deserunt
              quaerat magni nesciunt perferendis! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Adipisci qui repellendus nostrum,
              accusantium optio animi voluptas minus corrupti fuga deleniti
              dolore, molestias totam? Atque quia quidem cum quis quasi, ducimus
              unde temporibus, non neque labore porro minus sunt omnis voluptas
              dolor dolores. Sit error repellat iusto ab atque, consectetur
              doloribus.
            </p>
            <p className="text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
              quis, eaque velit vero eos suscipit ullam labore, maxime
              blanditiis qui ratione perspiciatis quaerat debitis consequuntur.
              Voluptate numquam quod doloribus quam natus, maiores tenetur
              reiciendis odit atque id, voluptatem facere consequuntur
              molestias, repellendus impedit omnis delectus Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Natus earum dignissimos
              ratione vero nesciunt iusto soluta laboriosam fuga distinctio,
              consequatur, inventore libero voluptatem placeat, voluptatibus est
              iste odio sapiente molestias quam laborum nostrum repudiandae
              dolor. Optio exercitationem molestiae, reiciendis doloribus
              aperiam debitis cum vero magnam velit placeat! Qui laudantium
              quasi omnis delectus voluptatum cum repudiandae nostrum quos
              nesciunt culpa ducimus neque quas hic sequi at tenetur mollitia
              tempora molestiae doloribus, architecto quae blanditiis sit
              incidunt.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
