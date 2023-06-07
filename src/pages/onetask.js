import Cardquestion from "<eri>/components/Cardc";
import { supabase } from "<eri>/supabasec";

export default function Onetask({ questions }) {

  return (
 
    <div className=" pt-10 mx-auto  px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28 bg-background">
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="text-3xl font-bold m-5">Define your Goal here</h1>
      <div className="text-black inline-block overflow-hidden">
        <ul className="max-w-[26rem] sm:max-w-[52.5rem] mt-6 sm:mt-8 md:mt-10 mx-auto space-y-8 pb-0">
          {questions.map((question) => (
            <Cardquestion key={question.id} question={question} />
          ))}
        </ul>
      </div>
    </div>
  </div>

  );
}

export const getStaticProps = async () => {
 
let { data: questions } = await supabase
.from('questions')
.select('*')


  return { props: { questions } };
};


