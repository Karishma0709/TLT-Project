const backendDomain = "http://localhost:5050";

const SummaryApi = {
    signUp: {
        url: `${backendDomain}/api/signUp`,
        method: "post",
      },
      signIn: {
        url: `${backendDomain}/api/signIn`,
        method: "post",
      },
      AllUser:{
        url: `${backendDomain}/api/registerUser`,
        method: "get",
      },
      ALlpyPapers:{
        url:`${backendDomain}/api/all-papers`,
        method: "get",
      },
      AllmpcjData:{
       url:`${backendDomain}/api/mpcj-data`,
       method: "get"
      }
}
export default SummaryApi;