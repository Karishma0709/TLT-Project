// const backendDomain = "https://tlt-project-6ivu.onrender.com";
const backendDomain = "http://localhost:8080";


const SummaryApi = {
  fastTrackForm: {
    url: `${backendDomain}/api/fastTrackForm`,
    method: "post",
  },
  empowermentForm: { 
    url: `${backendDomain}/api/empowermentForm`,
    method: "post", 
  },
  jetForm: {
    url: `${backendDomain}/api/jetForm`,
    method: "post",
  },
  personalinfo: {
    url: `${backendDomain}/api/personalinfo`,
    method: "post",
  },
  contactForm: {
    url: `${backendDomain}/api/contactForm`,
    method: "get",
  },
  mpcjForm: {
    url: `${backendDomain}/api/mpcjForm`,
    method: "post",
  },
  tpmForm: {
    url: `${backendDomain}/api/tpmForm`,
    method: "post",
  },
  prepaper: {
    url: `${backendDomain}/api/prepaper`,
    method: "post",
  },
  pyPaper: {
    url: `${backendDomain}/api/pyPaper-info`,
    method: "get",
  },
  saveGuardianDetailsPost: {
    url: `${backendDomain}/api/saveGuardianDetails`,
    method: "post",
  },
  saveGuardianDetailsGet: {
    url: `${backendDomain}/api/saveGuardianDetails`,
    method: "get",
  },
  contactDoc: {
    url: `${backendDomain}/api/contactDoc`,
    method: "post",
  },
  saveContactDocumentDetailsGet: {
    url: `${backendDomain}/api/saveContactDocumentDetails`,
    method: "get",
  },
  EducationalDetailsPost: {
    url: `${backendDomain}/api/EducationalDetails`,
    method: "post",
  },
  EducationalDetailsGet: {
    url: `${backendDomain}/api/EducationalDetails`,
    method: "get",
  },
  consentdetails: {
    url: `${backendDomain}/api/consentdetails`,
    method: "post",
  },
  ConsentDetails: {
    url: `${backendDomain}/api/ConsentDetails`,
    method: "get",
  },
 signUp: {
    url: `${backendDomain}/api/signUp`,
    method: "post",
  },
  signIn: {
    url: `${backendDomain}/api/signIn`,
    method: "post",
  },
  current_user: {
    url: `${backendDomain}/api/userDetails`,
    method: "get",
  },
  logout: {
    url: `${backendDomain}/api/userLogout`,
    method: "get",
  },
  registerUser: {
    url: `${backendDomain}/api/registerUser`,
    method: "get",
  },
  AllmarqueeGet: {
    url: `${backendDomain}/api/marquee-data/66b751ebc085bfafb981a879`,
    method: "get",
  },
  PyPaperPDF:{
    url:`${backendDomain}/api/getpydata`,
     method: "get"
    },
    UnpaidPDF:{
      url:`${backendDomain}/api/unpaidUpdate`,
       method: "put"
    },
    UnpaidPDF:{
      url:`${backendDomain}/api/unpaidDelete`,
       method: "delete"
    },


    

};

export default SummaryApi;
