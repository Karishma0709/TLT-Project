import TpmData from '../components/TpmData';

// const backendDomain = "https://tlt-project-6ivu.onrender.com";
const backendDomain = 'http://localhost:8080';

const SummaryApi = {
  signUp: {
    url: `${backendDomain}/api/signUp`,
    method: 'post',
  },
  signIn: {
    url: `${backendDomain}/api/signIn`,
    method: 'post',
  },
  AllUser: {
    url: `${backendDomain}/api/registerUser`,
    method: 'get',
  },
  ALlpyPapers: {
    url: `${backendDomain}/api/all-papers`,
    method: 'get',
  },
  AllmpcjData: {
    url: `${backendDomain}/api/mpcj-data`,
    method: 'get',
  },
  AlltpmData: {
    url: `${backendDomain}/api/tmp-data`,
    method: 'get',
  },
  Allmarquee: {
    url: `${backendDomain}/api/marquee`,
    method: 'post',
  },
  updateMarquee: {
    url: `${backendDomain}/api/marquee-data/66b751ebc085bfafb981a879`,
    method: 'put',
  },
  PyPaperPDF: {
    url: `${backendDomain}/api/PyPaperPDF`,
    method: 'post',
  },
  GetPyPaperPDF: {
    url: `${backendDomain}/api/getpydata`,
    method: 'get',
  },
  PyPaperPDFupload: {
    url: `${backendDomain}/api/pypaperdataupdate/:id`,
    method: 'put',
  },
  PyPaperPDFDelete: {
    url: `${backendDomain}/api/pypaperdataDelete/:id`,
    method: 'delete',
  },
  UnpaidPDF: {
    url: `${backendDomain}/api/upload-files`,
    method: 'post',
  },
  UnpaidPDF: {
    url: `${backendDomain}/api/get-files`,
    method: 'get',
  },
  UnpaidPDF: {
    url: `${backendDomain}/api/unpaidUpdate`,
    method: 'put',
  },
  UnpaidPDF: {
    url: `${backendDomain}/api/unpaidDelete`,
    method: 'delete',
  },

  notifies: {
    url: `${backendDomain}/api/notifies`,
    method: 'post',
  },
  Getnotifiess: {
    url: `${backendDomain}/api/getnotifies`,
    method: 'get',
  },
  notifiesUpdate: {
    url: `${backendDomain}/api/Notificationupdate/:id`,
    method: 'put',
  },
  notifiesDelete: {
    url: `${backendDomain}/api/Notificationdelete/:id`,
    method: 'delete',
  },
  EmpowermentAdmin: {
    url: `${backendDomain}/api/getempowermentForm`,
    method: 'get',
  },
  EmpowermentAdminUpdate: {
    url: `${backendDomain}/api/Eupdate/:id`,
    method: 'put',
  },
  EmpowermentAdminDelete: {
    url: `${backendDomain}/api/Edelete/:id`,
    method: 'delete',
  },
  empowermentFormPay: {
    url: `${backendDomain}/api/paymentstatus`,
    method: 'post',
  },
  FastTractFormAdmin: {
    url: `${backendDomain}/api/getFastTrackForm`,
    method: 'get',
  },
  fastTrackFormpay: {
    url: `${backendDomain}/api/FastTrackpaystatus`,
    method: 'post',
  },
  FastTractFormAdminUpdate: {
    url: `${backendDomain}/api/updateFastTrackForm/:id`,
    method: 'put',
  },
  FastTractFormAdminDelete: {
    url: `${backendDomain}/api/deleteFastTrackForm/:id`,
    method: 'delete',
  },
  Syllabus: {
    url: `${backendDomain}/api/getSyllabusUpload`,
    method: 'get',
  },
  SyllabusUpdate: {
    url: `${backendDomain}/api/updateSyllabusById/:id`,
    method: 'put',
  },
  SyllabusDelete: {
    url: `${backendDomain}/api/deleteSyllabusById/:id`,
    method: 'delete',
  },
  TpmData: {
    url: `${backendDomain}/api/getTpmFormDetails`,
    method: 'get',
  },
  TpmDataUpdate: {
    url: `${backendDomain}/api/updateTpmFormDetails/:id`,
    method: 'put',
  },
  TpmDataDelete: {
    url: `${backendDomain}/api/deleteTpmFormDetails/:id`,
    method: 'delete',
  },
};
export default SummaryApi;
