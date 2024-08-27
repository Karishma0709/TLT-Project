// const backendDomain = "https://tlt-project-6ivu.onrender.com";
const backendDomain = "http://localhost:5054";

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
      },
      AlltpmData:{
       url:`${backendDomain}/api/tmp-data`,
       method: "get"
      },
      Allmarquee:{
       url:`${backendDomain}/api/marquee`,
       method: "post"
      },
      updateMarquee:{
        url:`${backendDomain}/api/marquee-data/66b751ebc085bfafb981a879`,
       method: "put"
      },
      PyPaperPDF:{
      url:`${backendDomain}/api/PyPaperPDF`,
       method: "post"
      },
      UnpaidPDF:{
        url:`${backendDomain}/api/upload-files`,
         method: "post"
        },  UnpaidPDF:{
          url:`${backendDomain}/api/get-files`,
           method: "get"
          }

}
export default SummaryApi;