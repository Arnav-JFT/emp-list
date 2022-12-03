function employee(){
    this.emp = []
    this.post = function(obj){
        let p = new Promise((resolve,reject)=>{
        setTimeout(() => {
            this.emp.push(obj)
            resolve(this.emp)
            
        }, 2000);
    })
    return p;
    }
    this.get = function(id){
        let p = new Promise((resolve,reject)=>{
            setTimeout(() => {
                let index = this.emp.findIndex((e)=>{
                    return e.id == id
                })
                resolve(this.emp[index])
            }, 2000);
        })
        return p
    }
    this.remove = function(id){
        let p = new Promise((resolve, reject) => {
            setTimeout(() => {
                      this.emp.splice(
                        this.emp.findIndex((a) => a.id === id),
                        1
                      );
                      resolve(this.emp);
                    }, 2000);
        })
        return p
    }
    this.put = function(id,name,job,salary){
        let p = new Promise((resolve, reject) => {
            
            setTimeout(()=>{
                this.emp[id].name = name
                this.emp[id].job = job
                this.emp[id].salary = salary
                resolve(this.emp);
            },2000);
        })
        return p;
    }
}
