import request from '@/utils/request'
export function getHRV(data) {
  return request({
    url:'ips/hrv/medicalRecordId/'+data,
    method:'get',
  })
}
export function getVerificationCode() {
  return request({
    url:'ips/hrv/verificationCode',
    method:'get',
  })
}
