import { Op } from "sequelize"
import Schedule from "../../models/schedule.model"
import ApiError from "../../utils/ApiError"
import ApiResponse from "../../utils/ApiResponse"

export const ScheduleAirtime = async({ userid, amount, provider, phone,frequency,date,payment }:{ userid:string, amount:string, provider:string, phone:string,frequency:string,date:string,payment:string }) => {
  try{
    const nextDate = getNextDate(frequency, date)
    const response = await Schedule.create({
      userid,
      amount,
      provider,
      phone,
      recipient: phone,
      frequency,
      date,
      nextDate,
      payment,
      service:"airtime"
    })
    if(!response){
      return new ApiError()
    }
    return new ApiResponse({message:`Your ${provider} Airtime ${frequency} Bill for ₦${amount} has been successfully scheduled!`})
  }catch(error){
    return new ApiError()
  }
}
export const ScheduleData = async({ userid, datacode, provider,plan,amount, phone,frequency,date,payment }:{ userid:string, datacode:string, provider:string,plan:string,amount:string, phone:string,frequency:string,date:string,payment:string }) => {
  try{
    const nextDate = getNextDate(frequency, date)
    const response = await Schedule.create({
      userid,
      code:datacode,
      provider,
      name:plan,
      amount,
      phone,
      recipient:phone,
      frequency,
      date,
      nextDate,
      payment,
      service:"internet"
    })
    if(!response){
      return new ApiError()
    }
    return new ApiResponse({message:`Your ${provider} ${plan} ${frequency} Bill has been successfully scheduled!`})
  }catch(error){
    return new ApiError()
  }
}
export const ScheduleCable = async({ userid, amount, provider, recipient,month,plan,frequency,code,date,payment }:{ userid:string, amount:string, provider:string, recipient:string,month:number,plan:string,frequency:string,code:string, date:string,payment:string }) => {
  try{
    const nextDate = getNextDate(frequency, date)
    const response = await Schedule.create({
      userid,
      name:plan,
      amount,
      provider,
      recipient,
      month,
      frequency,
      code,
      date,
      nextDate,
      payment,
      service:"cable"
    })
    if(!response){
      return new ApiError()
    }
    return new ApiResponse({message:`Your ${plan} ${frequency} Bill for ₦${amount} has been successfully scheduled!`})
  }catch(error){
    return new ApiError()
  }
}
export const ScheduleElectric = async({ userid, amount, provider, phone,frequency,date,payment }:{ userid:string, amount:string, provider:string, phone:string,frequency:string,date:string,payment:string }) => {
  try{
    const nextDate = getNextDate(frequency, date)
    const response = await Schedule.create({
      userid,
      amount,
      provider,
      phone,
      frequency,
      date,
      nextDate,
      payment,
      service:"electric"
    })
    if(!response){
      return new ApiError()
    }
    return new ApiResponse({message:`Your ${provider} Airtime ${frequency} Bill for ₦300 has been successfully scheduled!`})
  }catch(error){
    return new ApiError()
  }
}

export const ScheduleFetch = async({userid,service}:{userid:string,service:string})=>{
  try{
    const response = await Schedule.findAll({
      where: {
        userid,
        service: service === "airtime" ? service : {
          [Op.ne]: "airtime"
        }
      },
      raw: true
    })
    
    return new ApiResponse({data:response})

  }catch(error){
    console.error(error)
    throw new ApiError({message:"Failed to fetch"})
  }
}

export const ScheduleEdit = async({userid,id,action}:{userid:string,id:string,action:string})=>{
  try{
    const response = await Schedule.findOne({
      where: {
        userid,
        id
      },
      raw: true
    })

    if(!response){
      return new ApiError({message:"Schedule not found"})
    }
    if(action === "delete"){
      await Schedule.destroy({
        where: {
          id,
          userid
        }
      })
      return new ApiResponse({message:"Schedule deleted successfully"})
    }
    if(action === "pause" || action === "resume"){
      await Schedule.update({
        status: action === "pause" ? "paused" : "active"
      }, {
        where: {
          id,
          userid
        }
      })
      return new ApiResponse({message:"Schedule updated successfully"})
    }
    return new ApiResponse({data:response})

  }catch(error){
    console.log(error)
    throw new ApiError({message:"Failed to fetch"})
  }
}


function getNextDate(frequency:string,date:string) {
  let datenumber = 1;
  switch(frequency){
    case "daily":
      datenumber = 1;
      break;
    case "weekly":
      datenumber = 7;
      break;
    case "monthly":
      datenumber = 30;
      break;
  }
  const oldDate = new Date(date)
  const nextDate = new Date()
  nextDate.setDate(oldDate.getDate() + datenumber)
  return nextDate.toISOString()
}
