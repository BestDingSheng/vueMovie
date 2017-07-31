import jsonp from 'jsonp'

function http(url){
  return new Promise(function(resolve, reject){
    jsonp(url,{param:'callback'},(err,res)=>{
      if(res){
        resolve(res)
      }else{
        reject(err)
      }
    })
  })
}

export default {http}


