import { bgFounderCl, bgFounderGs } from "../../../../assets";
import SectionTitle from "../../../../component/sectionTitle";

const Founder = () => {
   const founder = [
      {
         name: 'Andy Bahari',
         position: 'Country Leader',
         image: bgFounderCl
      },
      {
         name: 'Septiany Punti Dewi',
         position: 'General Secretary',
         image: bgFounderGs
      }
   ]
   return (
      <section>
         <div className={`bg-dot-pattern bg-no-repeat bg-left bg-top-left py-[72px]`}>
            <div className={`bg-mascot bg-no-repeat bg-blend-overlay bg-[right_top_1rem]`}>
               <SectionTitle title={"Meet The Team"} />
               <div className='mt-[61px] flex flex-row items-center justify-around max-w-[1440px] w-[100%] mx-auto'>
                  {
                     founder.map((item, idx) => (
                        <div className="flex flex-col items-center">
                           <img src={item.image} width={336} height={273} className='mb-[24px]' />
                           <p className="font-primary text-[36px]">{item.name}<br /><p className="font-primary text-[24px]">{item.position}</p></p>
                        </div>
                     ))
                  }
               </div>
            </div>

         </div>
      </section>
   )
}


export default Founder;