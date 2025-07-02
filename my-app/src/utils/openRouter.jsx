
export const askAI = async (query) => {
  
  let timer = (sec) => {
    new Promise((_,reject)=>{
      setTimeout(() => {
        reject("time out");
    }, sec*1000) })
  }

  
  try{
      console.log(`AI request `);
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + import.meta.env.VITE_OPENROUTER_API_KEY, // ⚠️ Use your OpenRouter API key (TEMPORARILY)
          "HTTP-Referer": "http://localhost:5173", // your domain
          "X-Title": "ReactTestClient",
        },
        body: JSON.stringify({
          model: "google/gemma-3-27b-it:free",
          messages: [
            {
              role: "system",
              content:
                "You are a helpful movie recommendation bot which do not say anything to user but return json obj only so user can convet it into json object using JSON.parse() fucntion. you get maximum of 20 name of movies those are only available on The Movie Database (TMDb) and put the output in json format as an array the response to user should not start whit this ```json and end with this ``` it should only start whith { and end with } fo example { movies:[ The Nice Guys, 21 Jump Street]}",
            },
            {
              role: "user",
              content: query,
            },
          ],
        }),
      });
  
      const data = await res.json();
      console.log(data,"raw movies name from ai");
      let stringObj = (data.choices[0]?.message?.content).replace(/```json|```/g, "");
      console.log(stringObj)
      let jsonObj = JSON.parse(stringObj);
      console.log(jsonObj,typeof jsonObj,"converted movies name into json obj");

      return jsonObj
    }
    catch(err){
      console.error("error in askAi",err);
      throw err;
    }

  };

  // askAI();