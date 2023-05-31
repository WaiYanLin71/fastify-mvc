import axios from "axios";
import Alpine from 'alpinejs'
window.axios = axios;
window.Alpine = Alpine
window.addEventListener("DOMContentLoaded", Alpine.start)
document.addEventListener('alpine:init', () => {
    Alpine.data('dropdown', () => ({
      open: false,

      toggle() {
        this.open = !this.open
      },
      
      logout() {
        axios.post('/v1/auth/logout', {} ,{
          headers: {
            withCredentials :true
          }
        }).then((res) => {
            location.href = '/v1/auth/login'
        }).catch(error => {
          console.log(error)
        })
      }
    }))
  })