document.querySelector('#sort').addEventListener('change', (e) => {
    if(e.target.value) {
      const url = new URL(window.location)
        url.searchParams.set('sort', e.target.value)
        window.location.href = url.href
    }
})
document.addEventListener('alpine:init', () => {
    Alpine.data('modal', () => ({
        open: false,
        id:null,
        loader:false,

        showModal(id) {
            this.open = true
            this.id = id
        },
        deleteUser(){
          this.loader = true
          axios.delete(`/v1/users/${this.id}`).then(()=>{
            location.reload();
          }).catch(()=>{
             this.loader = false;
          })
        }
    }))
})