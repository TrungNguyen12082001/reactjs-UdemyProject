import axios from "axios";

export const signInAction = (user, history) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "POST",
        url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        data: user,
      });
      console.log("res: ", res);
      if (res.status === 200) {
        localStorage.setItem("user", JSON.stringify(res.data));
        history.goBack();
      }
    } catch (error) {
      console.log(error);
    }
  };
};
