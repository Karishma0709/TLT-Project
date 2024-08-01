const backendDomain = "http://localhost:5050";

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
    method: "get",
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
 signup: {
    url: `${backendDomain}/api/signup`,
    method: "post",
  },
  signin: {
    url: `${backendDomain}/api/signin`,
    method: "post",
  },
};

export default SummaryApi;
