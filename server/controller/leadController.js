import Lead from "../model/leadModel.js";

//create lead
export const leadGenerate=async(req,res)=>{
    try {
        const {name,email,contact,message}=req.body;
        if(!name || !email || !contact || !message){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }   
        const lead=await Lead.create({
            name,
            email,
            contact,
            message
        })
         return res.status(201).json({
            success:true,
            lead
         })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

//geat all leads
export const getAllLeads=async(req,res)=>{
    try {
        const leads=await Lead.find({}).sort({createdAt:-1});
        return res.status(200).json({
            success:true,
            leads
        })
           
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

//delete lead
export const deleteLead=async(req,res)=>{
   try {
     const {id}=req.params;
     await Lead.findByIdAndDelete(id);
     return res.status(200).json({
        success:true,
        message:"Lead deleted successfully"
     })
   } catch (error) {
     return res.status(500).json({
        success:false,
        message:error.message
     })
   }
}

