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
    method: "get",
  },

  prepaper: {
    url: `${backendDomain}/api/prepaper`,
    method: "post",
  },
  pyPaper: {
    url: `${backendDomain}/api/pyPaper-info`,
    method: "get",
  },

  saveGuardianDetails: {
    url: `${backendDomain}/api/saveGuardianDetails`,
    method: "post",
  },
  saveGuardianDetails: {
    url: `${backendDomain}/api/saveGuardianDetails`,
    method: "get",
  },

  saveContactDocumentDetails: {
    url: `${backendDomain}/api/saveContactDocumentDetails`,
    method: "post",
  },
  saveContactDocumentDetails: {
    url: `${backendDomain}/api/saveContactDocumentDetails`,
    method: "get",
  },

  EducationalDetails: {
    url: `${backendDomain}/api/EducationalDetails`,
    method: "post",
  },
  EducationalDetails: {
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
};
export default SummaryApi;
