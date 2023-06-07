import { supabase } from "<eri>/supabasec"
import { useState } from "react";

export default function Cardquestion({question}){

    const [answerValue, setAnswerValue] = useState("");
    const [titleVale, setTitleValue] = useState(question.title);
    const [descriptionVale, setDescriptionValue] = useState(question.description);

async function addAnswer(e) {
    e.preventDefault();
    try{
       
    const { data, error } = await supabase
            .from('questions')
            .insert({ 
                title: titleVale,
                description: descriptionVale,
                awnser:  answerValue,
            })
            .single()
            if(error) throw error;
            window.location.reload();
        }catch(error){
        alert(error.message);
    }
}
    return (
      <div className="flex-col m-5">
        <li className="relative rounded-3xl bg-slate-50 p-6 dark:bg-slate-800/80 dark:highlight-white/5 hover:bg-slate-100 dark:hover:bg-slate-700/50">
          <div className="">
            <h2 id="title" className="text-sm leading-6 text-slate-900 dark:text-white font-semibold">
              {question.title}
            </h2>
            <span>{question.description}</span>
            <form onSubmit={addAnswer}>
              <input 
                // value={answerValue}
                onChange={(e) => setAnswerValue(e.target.value)}
                placeholder="Input..."
                type="text"
                name="awnser"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </li>
      </div>
    );
    
}