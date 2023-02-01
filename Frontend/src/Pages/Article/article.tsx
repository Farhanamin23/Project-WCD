import React, { useState } from "react";
import "./article.css";
import { articleOne } from "../../assets";
import { articleTwo } from "../../assets";
import { articleThree } from "../../assets";
import SectionTitle from "../../component/sectionTitle";

const Article = () => {
  const [showMore, setShowMore] = useState(false);
  const articleText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum, dolor a scelerisque bibendum, risus libero malesuada libero, a commodo magna nibh euismod ante. Aliquam erat volutpat. Aliquam fringilla, sapien vitae aliquet aliquet, odio metus facilisis ante, id ullamcorper nulla mi ut mi. Nam tempor suscipit eros, eget pharetra sem tempor ut. Donec id ullamcorper nibh. Sed semper dapibus libero, eget tempor magna pellentesque at.";

  return (
    <main>
      <section>
        <div className='bg-[url("/public/img/bg-page-gradient.png")] md:bg-[url("/public/img/bg-page-gradient-desktop.png")] max-w-2xl mx-auto p-4 pt-28'>
          <SectionTitle title="Article" />
          <div className="flex flex-row">
            <img className="w-[120px]" src={articleOne} alt="" />
            <div>
              <p className="text-lg leading-relaxed article-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium similique nihil ducimus sapiente reiciendis voluptas
                maxime sint eos enim exercitationem. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Dolor, veniam, itaque numquam odit
                aliquid quo ut culpa ducimus excepturi quasi sapiente
                exercitationem voluptatem atque cum enim corporis optio
                laudantium. Incidunt debitis, omnis adipisci consequuntur
                consectetur, reprehenderit rerum unde, blanditiis deleniti
                ducimus quis dicta exercitationem ipsum dignissimos sint commodi
                eius tempora corporis libero dolorem at culpa. Repellendus,
                quasi neque modi voluptatem eligendi, ipsa quam voluptates quia
                quae assumenda doloremque eos vel inventore laboriosam. Illo
                aut, facilis odio saepe voluptas eius necessitatibus eaque
                repellendus repudiandae unde quae architecto? Ullam delectus,
                nulla nisi hic nihil laboriosam, vel dolorem autem dolores
                accusamus ad iste. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Vel earum voluptatum amet ullam tempore, natus
                at aperiam repellendus ipsa quae!
                {/* {showMore ? articleText : articleText.slice(0, 100)}
                {showMore ? (
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={() => setShowMore(false)}
                  >
                    Read less
                  </span>
                ) : (
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={() => setShowMore(true)}
                  >
                    Read more
                  </span>
                )} */}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Article;
