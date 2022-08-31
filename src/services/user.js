import { request } from "../configs/axios"

export const loginApi = (data) => {
   return request({
      data: data,
      url: '/QuanLyNguoiDung/DangNhap',
      method: 'POST'
   })
}