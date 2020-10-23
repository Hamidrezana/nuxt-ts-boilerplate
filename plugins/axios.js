export default function ({ $axios }) {
  $axios.onResponse(response => {
    // console.log("Axios onResponse: ", response);
    return response;
  });

  // $axios.onError(error => {
  // console.log("Axios Error: ", error);
  // if (error.response.status === 422) {
  // 	console.log("Error occurred with 422 status code");
  // }
  // });
}
