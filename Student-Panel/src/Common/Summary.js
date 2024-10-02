// const backendDomain = 'http://localhost:8080';
const backendDomain = "https://tlt-project-6ivu.onrender.com";

const SummaryApi = {
  signUp: {
    url: `${backendDomain}/api/signUp`,
    method: 'post',
  },
  signIn: {
    url: `${backendDomain}/api/signIn`,
    method: 'post',
  },
};

export default SummaryApi;
