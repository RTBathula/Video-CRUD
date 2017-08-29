import axios from "axios"

describe("Admin Services", () => {  

  describe("#login", () => {

    it("Should pass with default credentials", done => {
      this.timeout(100000) 

      let login = {     
        "email"    : "admin@admin.com",
        "password" : "admin",
      }

      var payload = {
        method         : "post",
        url            :  ´${global.baseUrl}/admin/login´,
        data           : login,
        validateStatus :    status => {
          return status >= 200 && status < 500 //customized to catch 400 erros
        }    
      }

      axios(payload)
      .then(function(response) {      
        if(response.data.status == "error" || response.status!=200){       
          done(response.data.message)        
        }
        if(response.data.status == "success" && response.status==200){         
          done()
        }        
      }).catch((err)=>{     
       	done(err.response)
      })
     
    })

  })
   
})