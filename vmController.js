const vmModel = require("./vmModel");

addVm =(req,res)=>{
    vm=req.body;
    newVm = new vmModel(vm);
    newVm.save().then(result=>{
        res.json(result);
    })
    vmModel
    console.log(req.body)
}
getVms = (req,res )=>{
    vmModel.find().then(result=>{
        res.json(result);
    })
    /*res.json([{
        _id:"",
        nom : "yassine",
        os :"windows",
        ip :"12",
        etat : true
      },
      {
        _id:"",
        nom : "yassine",
        os :"windows",
        ip :"ef",
        etat : false
      }
    ])*/
};

switchState=(req,res)=>{
    let idVm=req.params.id;
    vmModel.findById(idVm).then(result=>{
        result.etat =!result.etat;
        result.save().then(a=>res.json(a));
    })
    /*return res.json({
        _id:"",
        nom : "yassine",
        os :"windows",
        ip :"ef",
        etat : false
      })*/

}


module.exports ={addVm,getVms,switchState};