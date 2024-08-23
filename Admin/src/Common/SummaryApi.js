// const backendDomain = "https://tlt-project-6ivu.onrender.com";
<<<<<<< HEAD
const backendDomain = "http://localhost:5054"
=======
const backendDomain = "http://localhost:5054";

>>>>>>> 10f5c1df44bfd8df6c8b88024a4a38bf1aef59d0
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
<<<<<<< HEAD
      updateNotification:{
        url:`${backendDomain}/api/notifies/66ba7625a71ad33c8069aa6b`,
       method: "put"
=======
      PyPaperPDF:{
      url:`${backendDomain}/api/PyPaperPDF`,
       method: "post"
>>>>>>> 10f5c1df44bfd8df6c8b88024a4a38bf1aef59d0
      }

}
export default SummaryApi;