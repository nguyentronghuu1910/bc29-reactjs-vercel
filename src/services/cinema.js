import { request } from "../configs/axios"

export const fetchMovieShowTimesApi = (movieId) => {
   return request({
      url: `https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`,
      method: 'GET'
   })
}